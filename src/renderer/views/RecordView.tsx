import path from 'path';
import fs from 'fs';
import React, { useState, useEffect, useCallback, FC } from 'react';
import { ipcRenderer, clipboard } from 'electron';
import { Button, Typography, Avatar } from '@material-ui/core';

// import { classNames } from 'react-select/src/utils';
import { confirm, message, getAnchor } from '@renderer/helper';
import { useStoreState, useStoreActions } from '@renderer/store';
import { WindowTable } from 'react-window-table';
import useWindowSize from '@renderer/hooks/useWindowSize';
import useForceUpdate from '@renderer/hooks/useForceUpdate';
import IconImage from '@renderer/components/IconImage';
import CyanTooltip from '@renderer/components/CyanTooltip';
import WrapCell from '@renderer/components/WrapCell';
import styled from '@emotion/styled';
import FolderIcon from '@material-ui/icons/Folder';
import Footer from './Footer';

const OperationBtn = styled(Button)`
  ${({ size }) =>
    size === 'small'
      ? `line-height: initial;
  padding: 0;
  min-height: 0;
  margin-bottom: 2px;`
      : ''}
`;

const FolderAvatar = styled(Avatar)`
  width: 36px;
  height: 36px;
  background-color: #fff;
  color: #00bcd4;
`;

const RecordView = () => {
  const dataHelper = useStoreState(state => state.app.dataHelper);
  const { goodDB } = dataHelper;
  const { innerWidth, innerHeight } = useWindowSize();
  const forceUpdate = useForceUpdate();
  const [records, setRecords] = useState<SaveRecord[]>([]);
  const [isCodeMode, setIsCodeMode] = useState(false);
  const war3Path = useStoreState(state => state.app.war3Path);
  const selectedFile = useStoreState(state => state.common.selectedFile);
  const setSelectedFile = useStoreActions(actions => actions.common.setSelectedFile);
  const setDetailView = useStoreActions(actions => actions.view.setDetailView);

  const getRecords = useCallback(() => {
    selectedFile && ipcRenderer.send('getRecords', selectedFile);
  }, [selectedFile]);

  const onUpdateRecords = useCallback((event, records: SaveRecord[]) => {
    setRecords(records);
  }, []);

  useEffect(() => {
    ipcRenderer.on('updateRecords', onUpdateRecords);
    return () => {
      ipcRenderer.removeListener('updateRecords', onUpdateRecords);
    };
  }, [onUpdateRecords]);

  useEffect(() => {
    ipcRenderer.on('insertRecord', getRecords);
    getRecords();
    return () => {
      ipcRenderer.removeListener('insertRecord', getRecords);
    };
  }, [getRecords]);

  const buildItems = (list: string[], index: number, allCount: number) => (
    <React.Fragment key={index}>
      {list.map((name, i) => {
        const good = goodDB.find('name', name.replace(/ x[1-9][0-9]*/, ''));
        return (
          <CyanTooltip key={i} placement="top" title={name}>
            {good ? (
              <IconImage
                pointer
                float="left"
                size={36}
                src={good.imgData}
                onClick={e =>
                  setDetailView({
                    id: good.id,
                    show: true,
                    anchor: getAnchor(e),
                    isGood: true,
                  })
                }
              />
            ) : (
              <IconImage size={36} src={dataHelper.getImgData()} />
            )}
          </CyanTooltip>
        );
      })}
      {index !== allCount - 1 && (
        <FolderAvatar variant="square">
          <FolderIcon />
        </FolderAvatar>
      )}
    </React.Fragment>
  );
  // console.log('render');
  if (!selectedFile) {
    // console.log(saveFile);
    return <div />;
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }} />
        <Button color="primary" onClick={() => forceUpdate()}>
          刷新
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            confirm({
              title: '清除存档历史记录',
              content: '确认清除历史记录吗(仅保留最新一条记录)',
              onOk: () => {
                ipcRenderer.send('deleteRecords', selectedFile);
              },
            });
          }}
        >
          清除存档历史
        </Button>
        {((war3Path &&
          selectedFile &&
          !fs.existsSync(path.join(war3Path, 'twrpg', `${selectedFile}.txt`))) ||
          !war3Path) && (
          <Button
            color="secondary"
            onClick={() => {
              confirm({
                title: `删除存档记录【${selectedFile}】`,
                content: '注:【只清除程序内部记录,不会影响存档文件】',
                onOk: () => {
                  setSelectedFile('');
                  ipcRenderer.send('deleteFile', selectedFile);
                },
              });
            }}
          >
            删除存档记录
          </Button>
        )}
      </div>
      <WindowTable
        cancelMouseMove={false}
        maxHeight={innerHeight - 164}
        rows={records}
        rowCount={records.length}
        rowHeight={(index: number) => {
          if (index === 0) {
            return 40;
          }
          return 72;
        }}
        columnCount={5}
        columnWidth={index => [innerWidth - 274 - 12, 114, 80, 80][index]}
        minVisibleScrollViewWidth={0}
        minVisibleScrollViewHeight={0}
        theme={classNames => {
          return {
            [classNames.GUIDELINE_BOTTOM]: { height: '0!important' },
            [classNames.GUIDELINE_TOP]: { height: '0!important' },
            [classNames.GUIDELINE_RIGHT]: { height: '0!important' },
            [classNames.GUIDELINE_LEFT]: { height: '0!important' },

            [classNames.CELL]: {
              display: 'flex',
              fontSize: '1rem',
              padding: '0!important',
              borderRight: '2px solid #dedede',
              alignItems: 'center',
              lineHeight: '1.5',
              fontWeight: 400,
            },
            [classNames.HEADER]: { background: '#00bcd4 !important', color: 'white' },
            [classNames.ROW_EVEN]: { background: '#f6f7f8' },
          };
        }}
        columns={[
          // {
          //   name: 'no',
          //   label: ' ',
          //   textAlign: 'center',
          //   render: (rowData, record, { rowIndex }) => (
          //     <Typography variant="body1">{rowIndex}</Typography>
          //   ),
          // },
          {
            name: 'codes',
            label: '存档代码',
            textAlign: 'center',
            header: () => {
              return (
                <WrapCell pointer onClick={() => setIsCodeMode(!isCodeMode)}>
                  <Typography variant="body1">
                    {isCodeMode ? '存档代码(点击切换历史装备)' : '历史装备(点击切换存档代码)'}
                  </Typography>
                </WrapCell>
              );
            },
            render: (rowData, record) => {
              if (isCodeMode) {
                return (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {record.codes.map((code, index) => {
                      return (
                        <Typography key={index} variant="body2" align="left">
                          {code}
                        </Typography>
                      );
                    })}
                  </div>
                );
              }
              return (
                <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                  <div
                    style={{ display: 'flex', flexWrap: 'wrap', height: 72, alignItems: 'center' }}
                  >
                    {record.lists.map((list, index) =>
                      buildItems(list, index, record.lists.length),
                    )}
                  </div>
                </div>
              );
            },
          },
          {
            name: 'time',
            label: '日期',
            textAlign: 'center',
            render: (time: string) => (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {time
                  .split(' ')
                  .reverse()
                  .map((str, i) => (
                    <Typography key={i} variant="body1" align="center">
                      {str}
                    </Typography>
                  ))}
              </div>
            ),
          },
          {
            name: 'operations',
            label: '操作',
            textAlign: 'center',
            render: (rowData, record, { rowIndex }) => (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {record.codes.map((code, index) => (
                  <OperationBtn
                    key={index}
                    size={record.codes.length > 1 ? 'small' : 'medium'}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      clipboard.writeText(code);
                      message.success(
                        `复制第${rowIndex}条代码${
                          record.codes.length > 1 ? `【分段${index + 1}】` : ''
                        }成功!`,
                      );
                    }}
                  >
                    复制{record.codes.length > 1 ? index + 1 : ''}
                  </OperationBtn>
                ))}
              </div>
            ),
          },
          {
            name: 'delete',
            label: '操作',
            textAlign: 'center',
            render: (cellData, record) => (
              <Button
                disabled={records && records.length === 1}
                variant="contained"
                color="secondary"
                onClick={() => {
                  ipcRenderer.send('deleteOneRecord', record.id);
                }}
              >
                删除
              </Button>
            ),
          },
        ]}
      />

      <Footer showCalc />
    </>
  );
};

export default RecordView;
import React, { useContext } from 'react';
import api from '../shared/utils/api';
import { ListGroup } from 'react-bootstrap';
import { NameFile } from '../pages/homePage/homePageStyle';
import { ThemeContext } from '../contexts/ThemeContext';
import { StyledButton } from '../shared/utils/style';
import { saveAs } from 'file-saver';

interface IFileProp {
  file: IFile;
}

interface IFile {
  name: string;
  specialId: string;
}

const ElementFile = ({ file }: IFileProp) => {
  const theme = useContext(ThemeContext);
  const download = (file: IFile) => {
    api.download('/', { specialID: file.specialId }).then((response) => {
      const blob = new Blob([response.data], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, file.name);
    });
  };

  return (
    <ListGroup.Item>
      <NameFile theme={theme.state}>{file.name.split('.')[0]}</NameFile>
      <StyledButton theme={theme.state} onClick={() => download(file)}>
        download
      </StyledButton>
    </ListGroup.Item>
  );
};

export default ElementFile;

import React, { useContext } from 'react';
import api from "../shared/utils/api";
import { ListGroup } from 'react-bootstrap';
import { NameFile } from "../pages/homePage/homePageStyle";
import { ThemeContext } from "../contexts/ThemeContext";
import { StyledButton } from "../shared/utils/style";

interface IFileProp {
  file: IFile;
}

interface IFile {
  name: string;
  specialId: string;
}

const ElementFile = ({file}: IFileProp) => {
  const theme = useContext(ThemeContext);
  const download = async (file: IFile) => {

    await api.post(`/`, { "specialID": file.specialId});
  }

  return (
    <ListGroup.Item>
      <NameFile theme={theme.state}>{file.name.split(".")[0]}</NameFile>
      <StyledButton theme={theme.state} onClick={() => download(file)}>download</StyledButton>
    </ListGroup.Item>
  );
};

export default ElementFile;
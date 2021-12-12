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
}

interface SecretIDMapping {
  [key: number]: string
}

const ElementFile = ({file}: IFileProp) => {
  const theme = useContext(ThemeContext);
  const veryComplexBusinessLogic = (fileID: number) => fileID * 2;

  const secretIDMapping: SecretIDMapping = {
    2: "one",
    4: "22",
    6: "33threee"
  }

  const download = async (file: IFile) => {

    const [fileId] = file.name.split(".");
    const secretId = veryComplexBusinessLogic(parseInt(fileId));
    await api.post(`/`, { "specialID": secretIDMapping[secretId]});
  }

  return (
    <ListGroup.Item>
      <NameFile theme={theme.state}>{file.name.split(".")[0]}</NameFile>
      <StyledButton theme={theme.state} onClick={() => download(file)}>download</StyledButton>
    </ListGroup.Item>
  );
};

export default ElementFile;

import React, {Fragment, useEffect, useState} from 'react';
import api from "../../shared/utils/api";
import ElementFile from "../../components/ElementFile";
import { ListGroup } from 'react-bootstrap';

interface IFile {
  name: string;
  specialId: string;
}

const HomePage = () => {

  const [files, setFiles] = useState<IFile[]>([]);

  const listFileName = async () => {
    const result = await api.get(`/`); // call API with endpoint '/'
    setFiles(result);
  }

  useEffect(() => {
    listFileName();
  }, []);

  return (
    <Fragment>
      <ListGroup>
        {files.length > 0 && files.map(file =>
          <ElementFile key={file.name} file={file}/>
        )
        }
      </ListGroup>
    </Fragment>
  );
};

export default HomePage;

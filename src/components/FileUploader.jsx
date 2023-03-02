import React, { useContext, useState } from "react";
import fill from "../assets/Fill 1.svg";
import cerrar from "../assets/cerrar.svg";
import logo from "../assets/logo.svg";
import { AppContext } from "../context/AppContext";
import styles from "../styles/FileUploader.module.scss";

const FileUploader = ({ handleModal }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [finish, setFinish] = useState(false);
  const { saveMyMovie } = useContext(AppContext);

  const handleFileUpload = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if ((file && file.type === "image/jpeg") || file.type === "image/png") {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        setFile(reader.result);
      };
    } else {
      setError(true);
      alert("Please select a JPG or PNG file");
    }
  };

  const handleFileRemove = (e) => {
    e.preventDefault();
    setFile(null);
    setError(false);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (file && title) {
      const id = Math.floor(Math.random() * 9000) + 1000;
      saveMyMovie({ id, backdrop_path: file, title });
      setFinish(true);
      setFile(null);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setFile(null);
    setFinish(false);
    setTitle("");
    handleModal();
  };

  if (finish)
    return (
      <div className={styles.fileUploaderFinish}>
        <div onClick={(e) => handleClose(e)} className={styles.close}>
          <img src={cerrar} alt="close" />
        </div>
        <div className={styles.msg}>
          <div className={styles.congrats}>
            <img src={logo} alt="logo" />
            <p>¡Felicitaciones!</p>
            <p>{title} fue correctamente subida.</p>
          </div>
          <div className={styles.options}>
            <div className={styles.upload} onClick={(e) => handleClose(e)}>
              IR A HOME
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className={styles.fileUploader}>
      <div onClick={(e) => handleClose(e)} className={styles.close}>
        <img src={cerrar} alt="close" />
      </div>
      <div className={styles.addMovie}>agregar película</div>
      {!file && !error && (
        <div
          className={styles.uploaderDropzone}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileUpload}
        >
          <img src={fill} alt="clip" />
          <p>Agregá un archivo</p>
        </div>
      )}
      {error && (
        <div className={styles.loadingBarError}>
          <p>¡ERROR! no se pudo cargar la película</p>
          <div className={styles.error}></div>
          <p className={styles.submsg} onClick={(e) => handleFileRemove(e)}>
            reintentar
          </p>
        </div>
      )}
      {!error && file && (
        <div className={styles.loadingBarSuccess}>
          <p>100% cargado</p>
          <div className={styles.success}></div>
          <p className={styles.submsg}>¡listo!</p>
        </div>
      )}
      <input
        className={styles.titleInput}
        placeholder="TÍTULO"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.options}>
        <>
          <button className={styles.upload} onClick={(e) => handleUpload(e)}>
            subir película
          </button>
          <button className={styles.exit} onClick={(e) => handleClose(e)}>
            salir
          </button>
        </>
      </div>
    </div>
  );
};

export default FileUploader;

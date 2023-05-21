const config = {
  documentId: "6564326a-5cc2-4291-905e-307c8d0abbff",
  darkMode: true,
  token: "", //add your server side generated security token or change your document permission to public
};
CloudPDF(config, document.getElementById("viewer")).then((instance) => {});

module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
          h1, h2, p {
            padding: 0 100px;
          } 
          ol {
            padding: 0 100px 0 100px;
          }
          ol li {
            margin-top: 15px;
          }     
          .contendedor2 h2 {
            text-align: center;
          }
          .justify-center {
          text-align: center;      
          }
          .fontSize14 {
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 0.6px;
          }
          .justify-text {
            text-align: justify;
          } 
          .titulo1 {
            margin-bottom: 0;
            margin-top: 15px;
            font-size: 16px;
            text-align: center;
          }
          body {
            background: rgb(204,204,204);
            margin: 0;
            padding: 0;         
          }
          .mt100 {
            margin-top: 100px;
          }
          .mt30 {
            list-style-position: inside;
            margin-top: 30px;
            margin-bottom: 150px;
          }
          .mt45 {
            margin-top: 45px;
          }
          .mt30 li {
            margin-top: 30px;
            text-indent: 50px;
          }
          page {
            font-family: Arial, Helvetica, sans-serif;
            background: white;
            display: block;
            margin: 0 auto;
            margin-bottom: 0.5cm;
            box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
            width: 21cm;
            height: 26.68cm; 
            max-height: 26.68cm; 
            padding-top: 3cm;
          }
          .header > div {
            display: -webkit-box; 
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex; 
            display: flex;
            -webkit-justify-content: space-around;
            -moz-justify-content: space-around;
            -ms-justify-content: space-around;
            justify-content: space-around;  
            background-color: rgb(207, 205, 205);        
            width: 600px;
            margin: 0 auto;
            border: 1px solid #000;
          }
          .logo {
            border-right: 1px solid #000;
            min-width: 140px;
            background-color: rgb(255, 255, 255);
          }
          .logo img {
            width: 80px;
            height: 100%;
            object-fit: cover;
            margin-left: 30px;
          }
          
          @media print {
            body, page {
              margin: 0;
              box-shadow: 0;
            }
          }
          </style>
       </head>
       <body>      
       <page size="A4">
      <div class="header" style="height: 80px">
        <div style="height: 80px">
          <div class="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Logotipo_oficial_del_Gobierno_de_Chile.png" alt="">
          </div>        
          <h2 class="titulo1">PROGRAMA DE PROTECCIÓN DEL
            PATRIMONIO FAMILIAR
            D.S. Nº 255 (V. y U.) de 2006
            </h2>
        </div>
      </div>
      <h2 class="titulo1">DECLARACIÓN JURADA SIMPLE
        PROPIETARIO/RESIDENCIA
       </h2>
          
        <div class="mt100">
          <p class="justify-text fontSize14">Yo,______________________________________________ , cédula nacional de identidad número _____________________domiciliada en ________________________________comuna de Talca declaro bajo juramento que:</p>
         <ol class="justify-text fontSize14 mt30">
           <li>Ser propietario, asignatario y residente del inmueble ubicado en _______________________________________________comuna de Talca el cual forma parte del Proyecto denominado_____________________________________., cuya Entidad Gestión Inmobiliaria Social es ________________________________________</li>
           <li>Declaro que dicha vivienda será postulada al Proyecto denominado Mejoramiento de la Vivienda, Titulo II.</li></ol>
         <p style="text-indent: 50px; margin-bottom: 15px;">El Presente se firma para adjuntarlo a los documentos pertinentes para la postulación antes mencionada.</p>
         <p>Fecha en que se realiza la declaración:.</p>
         <p class="justify-center mt45"><strong>____________________________________________________________</strong></p>
         <p style="text-align: center; margin-top: 5px;">Firma e Impresión Digito Pulgar
          del Declarante
 </p>
        </div>   
  </page>
       </body>
    </html>
    `;
};
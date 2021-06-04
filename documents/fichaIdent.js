module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
      body {
        background: rgb(204,204,204);
        margin: 0;
        padding: 0;         
      }
      h1, h2, p, ol, ul {
        padding: 0 100px;
      }       
      ol li, ul li {
        margin-top: 15px;
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
      .footer {
        display: -webkit-box; 
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex; 
        display: flex;
        -webkit-justify-content: space-around;
        -moz-justify-content: space-around;
        -ms-justify-content: space-around;
        justify-content: space-around;
        width: 600px; 
        margin: 50px auto 0;
      }  
      table {
        width: 600px;
        margin: auto;
        border-spacing: 0;
        border-bottom: 1px solid #000;
        border-right: 1px solid #000;
      }
      table tr {        
        height: 25px;
        border: 1px solid #000;        
      }
      table tr td {
        border-top: 1px solid #000;
        border-left: 1px solid #000;
        font-size: 10px;
        font-weight: bold;
        padding-left: 5px;
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
       <h2 style="text-align: center; font-size: 14px;">FICHA IDENTIFICACIÓN DEL BENFICIARIO Y DE LA PROPIEDAD</h2>
       <h2 style="text-align: center; font-size: 14px;">LLAMADO MATERIALES DE CONSTRUCCIÓN 2020 (BANCO DE MATERIALES)</h2>
       <h2 style="text-align: center; font-size: 14px;">PROGRAMA DE PROTECCIÓN DEL PATRIMONIO FAMILIAR  D.S. Nº 255/06 </h2>

       <p style="font-size: 14px; margin-top: 20px;"><strong>1.-IDENTIFICACIÓN DEL BENEFICIARIO:</strong></p>

       <table>
            <tr>
              <td style="width: 130px">NOMBRES</td>
              <td style="width: 290px"></td>
              <td style="width: 90px;">FECHA DE NACIMIENTO</td>
              <td style="width: 90px;"></td>
            </tr>
            <tr>
              <td>APELLIDO PATERNO</td>
              <td></td>
              <td>ESTADO CIVIL</td>
              <td></td>
            </tr>
            <tr>
              <td>APELLIDO MATERNO</td>
              <td></td>
              <td>COMUNA</td>
              <td></td>
            </tr>
            <tr>
              <td>R.U.T.</td>
              <td></td>
              <td>PROVINCIA</td>
              <td></td>
            </tr>
            <tr>
              <td>EMAIL</td>
              <td></td>
              <td>FONO CONTACTO</td>
              <td></td>
            </tr>          
          </table>
       <p style="font-size: 14px; margin-top: 20px;"><strong>2.-IDENTIFICACIÓN DEL CONYUGE:</strong></p>

       <table>
            <tr>
              <td style="width: 130px">NOMBRES</td>
              <td style="width: 290px"></td>
              <td style="width: 90px;">FECHA DE NACIMIENTO</td>
              <td style="width: 90px;"></td>
            </tr>
            <tr>
              <td>APELLIDO PATERNO</td>
              <td></td>
              <td>ESTADO CIVIL</td>
              <td></td>
            </tr>
            <tr>
              <td>APELLIDO MATERNO</td>
              <td></td>
              <td>COMUNA</td>
              <td></td>
            </tr>
            <tr>
              <td>R.U.T.</td>
              <td></td>
              <td>PROVINCIA</td>
              <td></td>
            </tr>
            <tr>
              <td>EMAIL</td>
              <td></td>
              <td>FONO CONTACTO</td>
              <td></td>
            </tr>          
          </table>

       <p style="font-size: 14px; margin-top: 20px;"><strong>3.-IDENTIFICACIÓN DEL ARRENDATARIO U OCUPANTE LEGAL:</strong></p>

       <table>
            <tr>
              <td style="width: 130px">NOMBRES</td>
              <td style="width: 290px"></td>
              <td style="width: 90px;">FECHA DE NACIMIENTO</td>
              <td style="width: 90px;"></td>
            </tr>
            <tr>
              <td>APELLIDO PATERNO</td>
              <td></td>
              <td>ESTADO CIVIL</td>
              <td></td>
            </tr>
            <tr>
              <td>APELLIDO MATERNO</td>
              <td></td>
              <td>COMUNA</td>
              <td></td>
            </tr>
            <tr>
              <td>R.U.T.</td>
              <td></td>
              <td>PROVINCIA</td>
              <td></td>
            </tr>
            <tr>
              <td>EMAIL</td>
              <td></td>
              <td>FONO CONTACTO</td>
              <td></td>
            </tr>          
          </table>

       <p style="font-size: 14px; margin-top: 20px;"><strong>3. IDENTIFICACIÓN DE LA PROPIEDAD:</strong></p>

       <table>
            <tr>
              <td style="width: 130px">ROL</td>
              <td style="width: 290px"></td>
              <td style="width: 90px;">TIPO DE VIVIENDA</td>
              <td style="width: 90px;"></td>
            </tr>
            <tr>
              <td>DIRECCIÓN</td>
              <td></td>
              <td>MATERIALIDAD PREDOMINANTE</td>
              <td></td>
            </tr>
            <tr>
              <td>Nº</td>
              <td></td>
              <td>COMUNA</td>
              <td></td>
            </tr>
            <tr>
              <td>SECTOR/VILLA/POBLACIÓN</td>
              <td></td>
              <td>PROVINCIA</td>
              <td></td>
            </tr>                      
          </table>
       <div class="footer">
         <div style="width: 300px;">
           <p style="padding: 0; margin: 0; text-align: center;">_____________________________ </p>
           <p style="padding: 0; margin: 0; text-align: center;">FIRMA BENEFICIARIO</p>
         </div>
         <div style="width: 300px;">
           <p style="padding: 0; margin: 0;">_________________________________</p>
           <p style="padding: 0; margin: 0; text-align: center;">FIRMA ASISTENCIA TÉCNICA</p>
           <p style="padding: 0 0 0 40px; margin: 0;">NOMBRE:</p>
           <p style="padding: 0 0 0 40px; margin: 0;">RUT:</p>
         </div>
       </div>
       <p style="margin: 20px 0px 0 20px; font-size: 12px; font-weight: bold;">FECHA:</p>
       </page>
       </body>
    </html>
    `;
};
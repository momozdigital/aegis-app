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
        margin-top: 0;
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
            <h2 class="titulo1">DECLARACION JURADA PARA RECEPCIÓN DE TARJETA LLAMADO MATERIALES DE CONSTRUCCIÓN 2020</h2>    
            <div class="mt100">
            <p class="justify-text fontSize14">Yo,  --------------------------------------------------------, R.U.T.Nº ------------------------, domiciliado (a) en----------------------------------------------------------------------------------, Comuna de ------------------------, declaro bajo fe de juramento lo siguiente:</p>
            <ol class="justify-text fontSize14 mt30">
                <li>Estoy obligado (a) a utilizar los materiales de construcción adquiridos mediante este subsidio, en la ejecución de obras de mejoramiento de techumbre de mi vivienda.</li>
                <li>Cuento con los medios para gestionar la mano de obra con la que se ejecutarán las obras de mejoramiento de la techumbre, o en su defecto, poder realizarla personalmente.</li>
                <li>En caso que requiera aplicar un 40% del subsidio para la contratación de mano de obra, declaro no tener relación de parentesco con el maestro a contratar.</li>
                <li>Declaro estar en pleno conocimiento en cuanto a que la mala utilización de este subsidio facultará a SERVIU para solicitar la restitución parcial o total del monto de subsidio otorgado, y perseguir las acciones civiles y penales que ello implique, si se determina que se ha generado algún perjuicio hacia un tercero o que se han desviado los recursos para fines distintos para los que fueron asignados.</li>
            </ol>
            <p class="justify-center"><strong>…………………………………….</strong></p>
            <p class="justify-center"><strong>Firma y/o huella del (o la) postulante</strong></p>
            <p class="justify-center mt45"><strong>C.I. Nº -----------------</strong></p>
            <p class="mt45"><strong>Fecha</strong></p>
            </div>   
        </page>
       </body>
    </html>
    `;
};
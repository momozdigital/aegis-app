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
      .custom-ul li {
        margin-top: 5px;
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
       <div style="display: -webkit-box; 
                   display: -moz-box;
                   display: -ms-flexbox;
                   display: -webkit-flex;
                   display: flex; 
                   padding: 0 15px;">
         <div class="logo" style="width: 50%;">
           <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Logotipo_oficial_del_Gobierno_de_Chile.png" 
                alt="logo-chile"
                style="width: 100px; margin-left: 50px;">
         </div>          
         <p style="width: 50%; text-align: right;">${`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`}</p>
         
       </div>
       <h2 style="text-align: center; 
                  font-size: 16px; 
                  line-height: 25px;
                  width: 500px;
                  margin: auto;
                  color: #4884c1;">FORMULARIO DE DIAGNOSTICO DE TECHUMBRE 
                   POSTULACION LLAMADO TITULO II, MEJORAMIENTO DE LA VIVIENDA, BANCO DE MATERIALES
       </h2>
       <h2 style="text-align: center; 
                  font-size: 11.5px; 
                  line-height: 15px;
                  width: 500px;
                  margin: auto;
                  margin-top: 15px;">P R O G R A M A • D E • P R O T E C C I Ó N • D E L • P A T R I M O N I O • F A M I L I A R
                   D E P A R T A M E N T O • D E • A T E N C I Ó N • D E L • D É F I C I T • C U A L I T A T I V O
       </h2>
       

       <p style="font-size: 12px; margin-top: 20px; text-align: justify;">Para la postulación al llamado del Título II, Mejoramiento de la Vivienda del DS N° 255, (V. y U) de 2006, para la adquisición de Materiales de construcción para el mejoramiento de techumbres de viviendas construidas por SERVIU, se deberá aplicar el siguiente formulario de diagnóstico para evaluar la pertinencia de postular dicha vivienda al subsidio.</p>
       <ol style="text-align: justify; padding: 0 0 0 150px; width: 540px; font-size: 12px;">
         <li>La Vivienda es una Vivienda Construida por SERVIU o sus antecesores o fue construida con Subsidio habitacional (para determinar esto se puede utilizar como insumo los mapas anexos a la resolución del llamado), si no se puede verificar en la Dirección de Obras o en SERVIU.

           <br>SI _______      ó        NO ________
           </li>
         <li>La vivienda presenta asbesto cemento en la totalidad o parte de la cubierta (esto se puede determinar si tienen planchas tipo fibrocemento antiguas y la vivienda es de construcción anterior al año 2000)

           <br>SI _______      ó        NO ________<br>
           (Si la vivienda presenta asbesto no podrá postular dado que el retiro de este material requiere un procedimiento especial.)
           </li>
         <li>La vivienda presenta, filtraciones por causa de aguas lluvias al interior de la vivienda (esto se puede ver desde el interior por manchas de humedad en el cielo, por manchas de humedad en los muros, por problemas de deterioro de las cerchas o estructura de techumbre, u otro indicador similar)

           <br>SI _______      ó        NO ________
           </li>
         <li>Se ven problemas en la totalidad o parte de la cubierta de la techumbre (por ejemplo planchas sueltas o deformadas, planchas rotas o faltantes, encuentros de aguas inadecuados, falta de cumbreras o canaletas, etc)  

           <br>SI _______      ó        NO ________
           </li>
       </ol>

     
    <p style="font-size: 12px; margin-top: 20px; text-align: justify;">Si las viviendas no presentan ni filtraciones ni problemas en la cubierta se entenderá que no son viviendas que requieran ser postuladas a este programa.</p>     

    <p style="font-size: 12px; margin-top: 20px; text-align: justify;">El profesional competente declara que es verídica la evaluación señalada en el presente documento
     El postulante declara conocer y estar de acuerdo con la presente evaluación de la vivienda.
     </p>
     <div style="display: -webkit-box; 
                 display: -moz-box;
                 display: -ms-flexbox;
                 display: -webkit-flex;
                 display: flex; 
                 text-align: center; 
                 width: 600px; 
                 margin: 10px auto 0;">
       <p style="width: 50%; padding: 0;">Profesional Competente</p>
       <p style="width: 50%; padding: 0;">Postulante</p>
     </div>
     <div style="display: -webkit-box; 
                 display: -moz-box;
                 display: -ms-flexbox;
                 display: -webkit-flex;
                 display: flex; 
                 text-align: center; 
                 width: 600px; 
                 margin: 0 auto;">
      <ul class="custom-ul" style="list-style: none; text-align: left; padding-left: 65px; font-size: 12px;">
        <li>Firma</li>
        <li>Nombre</li>
        <li>Rut</li>
        <li>Profesión</li>
        <li>Patente</li>
      </ul>
      <ul class="custom-ul" style="list-style: none; text-align: left; padding-left: 195px; padding-right: 0; font-size: 12px;">
        <li>Firma</li>
        <li>Nombre</li>
        <li>Rut</li>
        <li>Condición de Tenencia:</li>
        <li>Propietario &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp___</li>
        <li>Arrendatario	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp___</li>
        <li>Ocupante legal	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp___</li>
        <li>Cónyuge &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp___</li>
      </ul>
     </div>     
   </page>
      </body>
    </html>
    `;
};
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
            padding: 0 100px 0 150px;
          }
          ol li {
            margin-top: 15px;
          } 
          .page-box {
            max-width: 800px;
            height: 1020px;
            margin: auto;
            margin-bottom: 20px;             
            padding: 80px;             
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica',
            color: #555;
            }     
          .contendedor2 h2 {
            text-align: center;
          }
          
          .justify-center {
          text-align: center;      
          }
          .fontSize14 {
            font-size: 14px;
          }
          .justify-text {
            text-align: justify;
          }
          .firmas {
            margin-top: 100px;            
            display: -webkit-box; 
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex; 
            display: flex;
            -webkit-justify-content: space-between;
            -moz-justify-content: space-between;
            -ms-justify-content: space-between;
            justify-content: space-between;            
            text-align: center;            
          }
          .firmas p {
            padding-left: 0;
            padding-right: 0;
            font-size: 14px;
          }
          .firmas div {
            flex-basis: 50%;
          }
          .subtitulo1 {       
            margin-top: 5px;
          }
          .titulo1 {
            margin-bottom: 0;
            margin-top: 0;
            font-size: 16px;
            text-align: center;
          }
          .firmaMandante1 {
            margin-top: 80px;
          }
          .prestador {
            margin-bottom: 80px;
          }
          body {
            background: #fff;
            margin: 0;
            padding: 0; 
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
          <div class="page-box">
              <h2 class="titulo1">CONTRATO DE PRESTACI??N DE SERVICIOS DE ASISTENCIA T??CNICA, LEGAL, ADMINISTRATIVA Y DE OPERACION DEL PROGRAMA</h2> 
              <p class="justify-center subtitulo1">(Programa de Protecci??n del Patrimonio Familiar para la obtenci??n  de Subsidios destinados al Financiamiento de Materiales de Construcci??n)</p> 
              <strong><p class="justify-center firmaMandante1">...................................................................</p>
              <p class="justify-center">(MANDANTE)</p>
              <p class="justify-center">&</p>
              <p class="justify-center">...................................................................</p>
              <p class="justify-center prestador">(PRESTADOR)</p></strong>
                <div>
                  <p class="justify-text fontSize14">En ................., a ..... de .................. de ............, entre don(??a) ............................ C??dula de Identidad N?? ....................................., domiciliado(a) en .................................., comuna de ............................., en adelante, el ???Mandante???, y don(??a) ........................... C??dula de Identidad N?? ........................., domiciliado(a) para estos efectos en ................................, comuna de ..........................., en representaci??n de .........................................., en adelante el ???Prestador???, se convienen el siguiente contrato:</p>
                  <p class="justify-text fontSize14"><strong>PRIMERO:</strong> El ???Mandante??? declara  ser  beneficiario y ser asignatario del subsidio destinado al financiamiento de materiales de construcci??n para proyectos de mejoramiento de viviendas previsto y establecido por la Resoluci??n Exenta  N?? xx del MINVU de xx de xx de 20xx,  asimilados a <strong>Proyectos de Habitabilidad de la Vivienda</strong> del programa de Protecci??n del Patrimonio Familiar regulado por el D. S. 255 (V. y U.)  de 2006 que <strong>tengan relaci??n con obras de reparaci??n de la envolvente de la vivienda;</strong> haber suscrito la declaraci??n jurada de ser propietario o su c??nyuge o arrendatario o ocupante legal del inmueble antes indicado, utilizar los materiales en el mejoramiento de esta y ejecutar dichas obras siguiendo la indicaciones del Prestador elegido, y tener conocimiento que se debe retirar la tarjeta prevista en aquella Resoluci??n para la compra de materiales en el SERVIU Regi??n del Maule una vez aprobado el presupuesto o listado de materiales de construcci??n por este ??ltimo.  Por su parte el ???Prestador???  declara haber suscrito el convenio marco regional para actuar como PSAT con la SEREMI de Vivienda y Urbanismo con fecha ?????? y aprobado por Resoluci??n Exenta N????????de la Seremi de V. y U., el cual se encuentra vigente seg??n consta en el Certiificado N?? ?????? de fecha???.. extendido por la misma SEREMI, y haber tenido proyectos habitacionales calificados como h??biles en cualquier Regi??n del pa??s desde la fecha en que comenz??  a regir dicho convenio.  </p>
                </div>   
          </div>
          <div class="page-box">
              <p class="justify-text fontSize14"><strong>SEGUNDO:</strong> El ???Mandante??? encomienda al ???Prestador???, proveer, entregar o suministrar los servicios de asesor??a para la operaci??n y aplicaci??n de subsidio otorgado en su favor destinado al financiamiento de materiales para proyectos de reparaci??n de viviendas asimilados a Proyectos de Mantenci??n o de Habitabilidad del programa de Protecci??n del Patrimonio Familiar referido en la cl??usula que antecede. El prestador, por su parte, viene en este acto en aceptar  el encargo encomendado y se compromete a desarrollar y ejecutar todas las acciones, tareas y actividades de asesor??a para la operaci??n y aplicaci??n del subsidio ya indicado, durante todas las etapas del proceso, previo, durante y despu??s de la adquisici??n de los materiales. </p>
              <p class="justify-text fontSize14"><strong>TERCERO:</strong> La prestaci??n de los servicios de asesor??a t??cnica, legal, administrativa y de operaci??n del subsidio antes indicado que le corresponder?? desarrollar al prestador de servicios de asistencia t??cnica, comprende las  siguientes acciones, tareas y actividades, sin que la enunciaci??n sea taxativa.  </p>
              <ol type="A" class="justify-text fontSize14">
                <li>Visitar la vivienda de propiedad del  mandante (si se puede) o contar con antecedentes como fotograf??as o video proporcionados por el mandante (ante la emergencia sanitara del covid-19) y elaborar el proyecto de mejoramiento, determinando las obras a desarrollar, la cubicaci??n de los materiales requeridos, el costo estimativo de estos  y el presupuesto del proyecto, considerando solo el costo de los materiales  y herramientas menores que se requieran utilizar,  de conformidad a lo dispuesto en la Resoluci??n Exenta N?? ??????.MINVU de fecha??????  </li>
                <li>Incorporar al sistema RUKAN del MINVU las obras a realizar y elaborar e ingresar al SERVIU Regi??n del Maule la carpeta t??cnica y legal con todos los antecedentes del proyecto reci??n indicado. </li>
                <li>Asistir al mandante ??? beneficiario y asignatario del subsidio, cuando se acerque a un establecimiento comercial del giro de ferreter??a o provisi??n de materiales con convenio suscrito con SERVIU Regi??n del Maule,  en la  adquisici??n  de materiales y herramientas de acuerdo a lo indicado en el presupuesto elaborado por el prestador. </li>
                <li>Apoyar t??cnicamente al mandante en la operaci??n y aplicaci??n de subsidio otorgado,  e inspeccionar la correcta ejecuci??n de las obras de reparaci??n del inmueble afectado, dejando constancia en el libro de obra que deber?? disponer para tal efecto. </li>
                <li>Informar favorablemente al SERVIU del avance de obras y/o para certificar su finalizaci??n, de acuerdo al formato tipo entregado por el MINVU, con declaraci??n que los materiales adquiridos fueron empleados en esa operaci??n, seg??n los procedimientos establecidos al efecto.</li>
              </ol>        
          </div> 
          <div class="page-box">
            <p class="justify-text fontSize14"><strong>CUARTO:</strong> El precio que se pagar?? por los servicios antes se??alados, ser?? los honorarios dispuestos en la Resoluci??n Exenta  N?? ?????? del MINVU de ??????..,  por las actividades, tramites y gestiones que le corresponde realizar al prestador en cumplimiento del presente contrato, y que el SERVIU pagar?? al prestador una vez que se cumplan los requisitos establecidos por la Resoluci??n indicada en relaci??n a lo dispuesto en el D.S. N??  255 que Reglamento el Programa de Protecci??n del Patrimonio Familiar.</p>
            <p class="justify-text fontSize14">Dicho precio, determinado en Unidades de Fomento, se pagar?? en su equivalente en pesos moneda nacional al valor de dicha unidad al momento de efectuarse el pago, y de acuerdo a como se se??ala en la cl??usula siguiente.</p>
            <p class="justify-text fontSize14">El precio que se pague, incluir?? todos los gastos que directa o indirectamente demanden las labores que se encomienda. Sin que la enunciaci??n sea taxativa, dicho precio tambi??n cubrir?? el pago que deber?? efectuar el ???Prestador??? de impuestos, gastos notariales, honorarios profesionales, planos y gastos financieros de garant??as y seguros que correspondan.</p>
            <p class="justify-text fontSize14"><strong>QUINTO:</strong> El SERVIU de la Regi??n del Maule pagar?? al ???Prestador??? de acuerdo a lo dispuesto en la Resoluci??n Exenta  N??  ?????? del MINVU de ?????????. .</p>
            <p class="justify-text fontSize14"><strong>SEXTO:</strong> Si el ???Prestador??? incurriera en un incumplimiento grave de las obligaciones que contrae en este acto, el ???Mandante??? podr?? poner t??rmino anticipado al contrato unilateralmente y solicitar a SERVIU la asesoria para buscar una nueva entidad Patrocinante. Este incumplimiento lo deber?? informar SERVIU a la  SEREMI-MINVU, a objeto de dar  aplicaci??n a lo establecido en el D.S. N?? 135, (V. y U.), de 1978 y sus modificaciones sobre el Reglamento del Registro Nacional de Consultores del Ministerio de Vivienda y Urbanismo, y proceder a la revisi??n de cumplimiento del convenio marco suscrito entre dicha instituci??n y el prestador.</p>
            <p class="justify-text fontSize14">Deber?? entenderse que existe incumplimiento grave de las obligaciones, sin que la enunciaci??n sea taxativa, en los siguientes casos:
            </p>
            <ol class="justify-text fontSize14">
              <li>Cuando el ???Prestador???, injustificadamente, no inicie los servicios de asesor??a encomendados en el plazo convenido;</li>
              <li>Cuando los servicios encomendados se paralicen por m??s de 15 d??as corridos, por causas imputables al ???Prestador???;</li>
            </ol>    
        </div> 
        <div class="page-box">
            <ol class="justify-text fontSize14">
            <li>Cuando exista notoria incapacidad t??cnica por parte del ???Prestador??? para efectuar los servicios de asistencia t??cnica encomendados;</li>
            <li>Cuando el ???Prestador??? se negara injustificada y reiteradamente a entregar los antecedentes t??cnicos, financieros o jur??dicos solicitados por el ???Mandante???, en relaci??n al trabajo encomendado.</li>
            </ol> 
            <p class="justify-text"><strong>S??PTIMO:</strong> Durante la etapa de ejecuci??n de las obras, el SERVIU deber?? fiscalizar o supervisar las labores del ???Prestador???. En caso de detectarse fallas, podr?? optar, entre otras, por las siguientes medidas para resguardar la debida aplicaci??n del subsidio otorgado:</p>
            <ol type="A" class="justify-text fontSize14">
            <li>Enviar al ???Prestador??? un informe que d?? cuenta del estado de aplicaci??n del beneficio, de las deficiencias en la calidad y/o de eventuales riesgos asociados a la ejecuci??n del proyecto;</li>
            <li>Solicitar al ???Prestador??? que exija a quien preste el servicio de construcci??n, la reparaci??n o demolici??n y posterior ejecuci??n de las partidas que presenten deficiencias constructivas, fallas o problemas de calidad de materiales o de ejecuci??n;</li>
            <li>Solicitar al ???Prestador??? que ponga en conocimiento de la D.O.M. respectiva, las irregularidades detectadas, cuando corresponda, para que en virtud de las facultades que ??sta posee, tome las medidas que sean procedentes. </li>
            </ol>
            <p class="justify-text fontSize14"><strong>OCTAVO:</strong> En todo aquello no acordado expresamente en el presente  acto, se aplican las normas establecidas en la Resoluci??n Exenta  N??  ?????? del MINVU de y lo dispuesto en el D. S. 255 (V. y U.  de 2006. Adem??s,  las partes fijan domicilio en la ciudad y comuna de................................. y se someten a la jurisdicci??n de los Tribunales Ordinarios de Justicia.</p>
            <p class="justify-text fontSize14"><strong>NOVENO:</strong> Se deja constancia que el ???Prestador??? se encuentra inscrito y vigente en el Registro de Consultores del Ministerio de Vivienda y Urbanismo, seg??n consta en el certificado de inscripci??n vigente que ambos declaran conocer y se entiende formar parte integrante del presente contrato.</p>
            <p class="justify-text fontSize14"><strong>D??CIMO:</strong> La personer??a de don(??a) .................................................... como representante del ???Prestador??? ....................................... consta de .................................., que se adjunta y el documento que las partes declaran conocer.</p>
        </div>
        <div class="page-box">
            <p class="justify-text fontSize14"><strong>D??CIMO PRIMERO:</strong> El presente contrato se firma en cuatro ejemplares de igual tenor, quedando uno en poder de cada una de las partes, y otra en poder del SERVIU de la........... Regi??n.</p> 
            <div class="firmas">
              <div class="prestador">
                <strong><p>______________________________________</p>
                <p>(PRESTADOR)</p></strong>
              </div>
            <div class="mandante">
              <strong><p>______________________________________</p>
              <p>(MANDANTE)</p></strong>
            </div>  
            </div> 
        </div>
       </body>
    </html>
    `;
};
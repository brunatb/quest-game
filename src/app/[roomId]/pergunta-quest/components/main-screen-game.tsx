import { ButtonAlternative } from "./button-alternative";

export function ScreenQuestion() {

    const testeAlternativa = ["A) Resposta da pergunta" , "B) resp" , "C) resp" , "D) resp"]; 
  
  //Simulando uma consulta por categoria da pergunta
    const categoria = "Sociedade"; 
    
   
    const CoresCategoria ={
        Artes : '#B91C1C', 
        Ciencia: '#1E40AF',
        Mundo : '#B45309',
        Esporte : '#15803D',
        Sociedade : '#6B21A8',
        Variedades : '#C2410C',

    }
    //exemplo uma categoria, depois implementar lógica**

    const corPergunta = CoresCategoria[categoria]; 

    return (
      <div
        className="flex flex-col gap-4 justify-center bg-white border-8 rounded-2xl max-h-[490px] p-2  "
        style={{ borderColor: corPergunta }}
      >
        <h1 className="text-center text-xl" style={{ color: corPergunta }}>
          {categoria}
        </h1>

        <div
          className="flex flex-col gap-4 text-justify text-sm p-2"
          style={{ color: corPergunta }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500ss simply dummy text of the printing.
          <div className="flex flex-col gap-4 items-center">
            <ButtonAlternative
              borderColor={corPergunta}
              textAlternative={testeAlternativa[0]}
            ></ButtonAlternative>
            <ButtonAlternative
              borderColor={corPergunta}
              textAlternative={testeAlternativa[1]}
            ></ButtonAlternative>
            <ButtonAlternative
              borderColor={corPergunta}
              textAlternative={testeAlternativa[2]}
            ></ButtonAlternative>
            <ButtonAlternative
              borderColor={corPergunta}
              textAlternative={testeAlternativa[3]}
            ></ButtonAlternative>
          </div>
        </div>
      </div>
    );

}
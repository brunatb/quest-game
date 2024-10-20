import { ButtonAlternative } from "./button-alternative";

export function ScreenQuestion() {

    const testeAlternativa = ["A) Resposta da pergunta" , "B) resp" , "C) resp" , "D) resp"]; 
  
  //Simulando uma consulta por categoria da pergunta
    const categoria = "Mundo"; 
    
   
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
        className="flex flex-col gap-8 justify-center bg-white border-8 p-2 rounded-3xl"
        style={{ borderColor: corPergunta }}
      >
        <h1 className="text-center text-3xl" style={{ color: corPergunta }}>
          {categoria}
        </h1>

        <div className="flex flex-col gap-6 text-justify text-xl" style={{ color: corPergunta }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500ss simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the standard dummy text ever 
          <div className="flex flex-col gap-8 p-2 items-center">
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
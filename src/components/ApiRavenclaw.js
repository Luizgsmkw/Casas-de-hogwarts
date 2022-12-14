import React, { useState, useEffect } from "react";
import * as S from "../styles/StyledApiRavenclaw";
import axios from "axios";
import alunosRavenclawImg from "../img/corvinal-neutro.jpg";

function ApiRavenclaw() {
  const [alunosRavenclaw, setAlunosRavenclaw] = useState([]);
  const url = "https://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setAlunosRavenclaw(response.data))
      .catch((err) => console.log(`Erro na solicitação ${err}`));
  }, []);

  return (
    <>
      <S.GlobalStyle />
      <S.SectionHouser>
        {alunosRavenclaw
          .filter((item) => item.house === "Ravenclaw")
          .map((item) => (
            <S.DivHouser>
              {(item.image && (
                <S.ImgAlunos
                  src={item.image}
                  alt="Imagem de um aluno/a da Grifinória"
                />
              )) ||
                (!item.image && (
                  <S.ImgAlunos
                    src={alunosRavenclawImg}
                    alt="Imagem de um aluno/a da Grifinória"
                  />
                ))}
              <S.P>Nome: {item.name}</S.P>
              {(item.patronus && <S.P>Patrono: {item.patronus}</S.P>) ||
                (!item.patronus && <S.P>Patrono: Não indentificado</S.P>)}
              {(item.dateOfBirth && (
                <S.P>Data Nascimento: {item.dateOfBirth}</S.P>
              )) ||
                (!item.dateOfBirth && (
                  <S.P>Data Nascimento: Não indentificado</S.P>
                ))}
            </S.DivHouser>
          ))}
      </S.SectionHouser>
    </>
  );
}

export default ApiRavenclaw;

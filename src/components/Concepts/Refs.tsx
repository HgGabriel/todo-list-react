import { FormEvent, useEffect, useRef, useState } from "react";

export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  function handleOnSubmit(event:FormEvent) {
    event.preventDefault()
    console.log(inputNameRef.current?.value)
    console.log(inputEmailRef.current?.value)
    console.log(inputPasswordRef.current?.value)
  }

  return (
    <form style={{ padding: "2rem" }} onSubmit={(event) => handleOnSubmit(event)}>
      <h1>useRef</h1>

      <br />
      <input type="text" placeholder="Nome Completo" ref={inputNameRef} />
      <input type="email" placeholder="email@email.com" ref={inputEmailRef} />
      <input type="password" placeholder="Senha" ref={inputPasswordRef} />

      <br />
      <button type="submit" onClick={handleOnSubmit}>Enviar</button>
    </form>
  );
};

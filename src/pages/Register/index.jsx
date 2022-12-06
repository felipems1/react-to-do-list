import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/admin", { replace: true });
          toast.success("Cadastro criado com sucesso !");
        })
        .catch(() => {
          console.log("ERRO AO FAZER CADASTRO!");
        });
    } else {
      toast.error("Preencha todos os campos !");
    }
  };

  return (
    <div className="home-container">
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta</span>

      <form className="form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Registrar</button>
      </form>
      <Link className="button-link" to="/">
        Já possui uma conta? Faça login!
      </Link>
    </div>
  );
};

export default Register;

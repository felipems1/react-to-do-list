import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";

import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/admin", { replace: true });
          toast.success("Login feito com sucesso !");
        })
        .catch(() => {
          console.log("ERRO AO FAZER O LOGIN!");
        });
    } else {
      toast.error("Preencha todos os campos !");
    }
  };

  return (
    <div className="home-container">
      <h1>Lista de tarefas</h1>
      <span>Gerencia sua agenda de forma fácil</span>

      <form className="form" onSubmit={handleLogin}>
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

        <button type="submit">Acessar</button>
      </form>
      <Link className="button-link" to="/register">
        Não possui uma conta? Cadastre-se
      </Link>
    </div>
  );
};

export default Home;

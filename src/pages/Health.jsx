import Button from "../components/Button";

export default function Health() {
  return (
    <div className="flex">
      <Button to="/plano-costa" color="bg-slate-50 hover:brightness-95">
        Plano Costa
      </Button>
      <Button to="/centro-clinico" color="bg-slate-100 hover:brightness-95">
        Centro Clínico Costa
      </Button>
      <Button to="/ambulancias" color="bg-slate-50 hover:brightness-95">
        Costa Ambulâncias
      </Button>
    </div>
  );
}
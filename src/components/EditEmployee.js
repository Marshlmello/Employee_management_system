import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

function EditEmployee(props) {
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [skills, setSkills] = useState(props.skills);

  const [vue, setVue] = useState(false);
  const [react, setReact] = useState(false);
  const [angular, setAngular] = useState(false);
  const [node, setNode] = useState(false);
  const [nest, setNest] = useState(false);
  const [typeScript, setTypeScript] = useState(false);
  const [sapui5, setSapui5] = useState(false);

  useEffect(() => {
    for (let i = 0; i < skills.length; i++) {
      if (skills[i].includes("Vue.js")) {
        setVue(true);
      }
      if (skills[i].includes("React")) {
        setReact(true);
      }
      if (skills[i].includes("Angular")) {
        setAngular(true);
      }
      if (skills[i].includes("Node.js")) {
        setNode(true);
      }
      if (skills[i].includes("Nest.js")) {
        setNest(true);
      }
      if (skills[i].includes("TypeScript")) {
        setTypeScript(true);
      }
      if (skills[i].includes("SAPUI5")) {
        setSapui5(true);
      }
    }
  }, []);

  useEffect(() => {
    const list = [];
    if (vue) {
      list.push("Vue.js");
    }
    if (react) {
      list.push("React");
    }
    if (angular) {
      list.push("Angular");
    }
    if (node) {
      list.push("Node.js");
    }
    if (nest) {
      list.push("Nest.js");
    }
    if (typeScript) {
      list.push("TypeScript");
    }
    if (sapui5) {
      list.push("SAPUI5");
    }
    setSkills(list);
  }, [vue, react, angular, node, nest, typeScript, sapui5]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>
        <svg
          className="h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Mitarbeiter hinzufügen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="editModal"
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              props.updateEmployee(
                props.id,
                firstName,
                lastName,
                email,
                skills
              );
            }}
          >
            <label className="flex flex-col">
              <p className="font-bold">Kontaktdaten</p>

              <input
                className="rounded-lg border-2 p-2 "
                type="text"
                id="name"
                value={firstName}
                onChange={(x) => setFirstName(x.target.value)}
                placeholder="Vorname"
                required
              />

              <input
                className="rounded-lg border-2 p-2 mt-2"
                type="text"
                id="name"
                value={lastName}
                onChange={(x) => setLastName(x.target.value)}
                placeholder="Nachname"
                required
              />

              <input
                className="rounded-lg border-2 p-2 mt-2"
                type="text"
                id="name"
                value={email}
                onChange={(x) => setEmail(x.target.value)}
                placeholder="E-Mail-Adresse"
                required
              />
            </label>
            <label>
              <p className="font-bold mt-4">Fähigkeiten</p>
              <div className="space-x-2 text-sm flex justify-center">
                {vue ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setVue(!vue)}
                  >
                    {" "}
                    Vue.js{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setVue(!vue)}
                  >
                    {" "}
                    Vue.js{" "}
                  </button>
                )}
                {react ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setReact(!react)}
                  >
                    {" "}
                    React{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setReact(!react)}
                  >
                    {" "}
                    React{" "}
                  </button>
                )}

                {angular ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setAngular(!angular)}
                  >
                    {" "}
                    Angular{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setAngular(!angular)}
                  >
                    {" "}
                    Angular{" "}
                  </button>
                )}
                {node ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setNode(!node)}
                  >
                    {" "}
                    Node.js{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setNode(!node)}
                  >
                    {" "}
                    Node.js{" "}
                  </button>
                )}
                {nest ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setNest(!nest)}
                  >
                    {" "}
                    Nest.js{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setNest(!nest)}
                  >
                    {" "}
                    Nest.js{" "}
                  </button>
                )}
                {typeScript ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setTypeScript(!typeScript)}
                  >
                    {" "}
                    TypeScript{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setTypeScript(!typeScript)}
                  >
                    {" "}
                    TypeScript{" "}
                  </button>
                )}
                {sapui5 ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-1 p-1 text-white bg-red-600"
                    onClick={(x) => setSapui5(!sapui5)}
                  >
                    {" "}
                    SAPUI5{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setSapui5(!sapui5)}
                  >
                    {" "}
                    SAPUI5{" "}
                  </button>
                )}
              </div>
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            form="editModal"
            className="rounded-lg bg-red-600 p-2 w-full font-bold text-white"
          >
            {" "}
            Speichern
          </button>
          <button
            onClick={handleClose}
            className="rounded-lg border-2 border-red-600 bg-white font-bold  p-2 w-full text-red-600"
          >
            {" "}
            Abbrechen
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;

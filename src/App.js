import { Card } from "react-bootstrap";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function App() {
  const isAuth = useSelector((state) => state.isauthenticated);
  const dispatch=useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login())
  };
  const logoutHandler=()=>{
    dispatch(authActions.logout())
  }
  return (
    <div>
      {!isAuth && (
        <Card
          style={{
            background: "blue",
            marginLeft: 500,
            height: 500,
            width: 450,
            marginTop: 100,
          }}
        >
          <h1 style={{ textAlign: "center", color: "white" }}>ReduxAuth</h1>
          <input
            type="text"
            placeholder="Email"
            style={{
              marginTop: 75,
              width: "75%",
              height: 30,
              borderRadius: "8px",
              border: "white",
              marginLeft: 35,
            }}
          />
          <form onSubmit={submitHandler}>
            <input
              type="password"
              placeholder="Password"
              style={{
                marginTop: 50,
                width: "75%",
                height: 30,
                borderRadius: "8px",
                border: "white",
                marginLeft: 35,
              }}
            />
            <button
              style={{
                marginLeft: 150,
                marginTop: 50,
                background: "white",
                width: 105,
                height: 30,
                border: "white",
                borderRadius: "5px",
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              Submit
            </button>
          </form>
        </Card>
      )}
      {isAuth && (
        <div>
          <button
            style={{
              marginLeft: 1400,
              marginTop: 25,
              width: 105,
              height: 30,
              borderRadius: "7px",
              background: "blue",
              border: "blue",
              color: "white",
              fontSize: 15,
              fontWeight: 700,
            }}
            onClick={logoutHandler}
          >
            Logout
          </button>
          <h1 style={{ textAlign: "center", marginTop: 250 }}>
            My User Profile
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;

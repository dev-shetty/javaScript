import Sidebar from "./Sidebar"

function Dashboard({ id }) {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
    </div>
  )
}

export default Dashboard

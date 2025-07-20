export default function MyAccount() {
  return (
    <div>
      <h2>My Account</h2>
      <h2>User Profile Card</h2>

      <div className="card">
        <img src="/assets/image.png" alt="John" style={{ width: "100%" }} />
        <h1>User Name</h1>
        <p className="title">Created At : --</p>
        <p className="title">E-Mail : --</p>
        <p>
          <button>Log out</button>
        </p>
      </div>
    </div>
  );
}

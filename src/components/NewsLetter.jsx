function NewsLetter() {
  return (
    <div
      style={{
        color: "var(--color-white)",
        backgroundColor: "var(--color-secondary-400)",
      }}
      className="mx-auto max-w-[1520px] px-4"
    >
      <div className="mx-auto grid lg:grid-cols-3">
        <div className="my-4 lg:col-span-2">
          <h1>Need advice on how to improve your flow?</h1>
          <p>Sign up to join our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-col items-center justify-between sm:flex-row">
            <input
              style={{ color: "var(--color-black)" }}
              type="email"
              name=""
              placeholder="email"
              className="flex w-full rounded-md p-3"
            />
            <button className="button my-6 ml-4 w-[200px] rounded-md border-none px-6 py-3 font-medium uppercase">
              Notify me
            </button>
          </div>
          <p>
            We are concerned about the security of your data, read {""}
            <span style={{ color: "var(--color-secondary-800)" }}>
              Privacy Policy
            </span>
          </p>
        </div>
        <hr
          style={{ backgroundColor: "var(--color-secondary-700)" }}
          className="border-1 my-8"
        />
      </div>
    </div>
  );
}

export default NewsLetter;

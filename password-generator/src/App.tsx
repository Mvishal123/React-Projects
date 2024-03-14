import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setlength] = useState(6);
  const [isNumberAllowed, setIsNumberAllowed] = useState<boolean>(false);
  const [isCharAllowed, setIsCharAllowed] = useState<boolean>(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) {
      chars += "1234567890";
    }

    if (isCharAllowed) {
      chars += "!@#$%^&*";
    }

    for (let i = 0; i < length; i++) {
      const index = Math.round(Math.random() * chars.length);

      pass += chars.charAt(index);
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isCharAllowed]);

  useEffect(() => {
    generatePassword();
    inputRef?.current?.blur();
  }, [length, isNumberAllowed, isCharAllowed]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onCopy = () => {
    window.navigator.clipboard.writeText(password);
    inputRef?.current?.select();
  };

  return (
    <div className="h-screen flex justify-center bg-black/90">
      <div className="mt-40">
        <h1 className="text-3xl font-bold text-white text-center">
          <span className="bg-orange-500 text-black px-2 py-1 rounded">
            Password
          </span>{" "}
          Generator
        </h1>

        <div className=" mt-12 flex">
          <input
            type="text"
            className="outline-none px-3 py-2 w-[24rem]"
            placeholder="Password"
            value={password}
            ref={inputRef}
          />
          <button
            className="px-3 bg-orange-500 font-bold rounded-tr-xl"
            onClick={onCopy}
          >
            Copy
          </button>
        </div>

        <div className="mt-10 flex">
          <div className="flex">
            <input
              type="range"
              value={length}
              min={6}
              max={60}
              onChange={(e) => {
                setlength(parseInt(e.target.value, 10));
              }}
            />
            <p className="ml-2 text-white">Length: {length}</p>
          </div>
          <div className="flex ml-4">
            <input
              type="checkbox"
              name=""
              id="isNumber"
              defaultChecked={isNumberAllowed}
              onChange={() => setIsNumberAllowed((prev) => !prev)}
            />
            <label
              htmlFor="isNumber"
              className="text-white ml-1"
              onChange={() => setIsNumberAllowed((prev) => !prev)}
            >
              Numbers
            </label>
          </div>

          <div className="flex ml-4">
            <input
              type="checkbox"
              name=""
              id="isChar"
              defaultChecked={isCharAllowed}
              onChange={() => setIsCharAllowed((prev) => !prev)}
            />
            <label htmlFor="isChar" className="text-white ml-1">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

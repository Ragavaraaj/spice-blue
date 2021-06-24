import React from "react";
import { useState } from "react";
import { IPage } from "./AppInterface";
import { AppDiv, GlobalStyle } from "./AppStyles";
import { Login, Task } from "./Page";

const App = () => {
  const [page, setPage] = useState<IPage>({ currentPage: "Login" });

  const pageSelector = () => {
    switch (page.currentPage) {
      case "Login":
        return <Login setPage={setPage} />;
      case "Task":
        return <Task setPage={setPage} />;
    }
  };

  return (
    <AppDiv>
      {pageSelector()}
      <GlobalStyle />
    </AppDiv>
  );
};

export default App;

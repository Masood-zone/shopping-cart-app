import { useState } from "react";
import AddUserDetails from "../../../Hooks/AddUserDetails";
import Utils from "../../../Utils/utils";

const UserInfo = () => {
  const {
    userList,
    setUserList,
    userName,
    setUserName,
    userMail,
    setUserMail,
  } = AddUserDetails();

  const [selectedUser, setSelectedUser] = useState();
  const [editUser, setEditUser] = useState(false);

  const { box, mailLink, anchorStyle, btn } = Utils();

  const handleClick = () => {
    setUserList((prevState) => {
      const information = {
        userName,
        userMail,
      };
      return [...prevState, information];
    });
    setUserName(" ");
    setUserMail(" ");
  };

  //Updating user info
  const handleUpdate = () => {
    const information = {
      userName,
      userMail,
    };
    setUserList((prevState) => {
      const newState = prevState;
      newState[selectedUser] = information;
      return [...newState];
    });
    setEditUser(false);
    setUserName("");
    setUserMail("");
  };

  //Field Edit
  const editFields = (user, index) => {
    setSelectedUser(index);
    setUserName(user.userName);
    setUserMail(user.userMail);
    setEditUser(true);
  };

  //Deleting user info
  const handleDelete = (index) => {
    setUserList((prevState) => {
      const newState = prevState.filter((value, i) => i !== index);
      return [...newState];
    });
  };

  return (
    <div>
      <h1>About you...</h1>
      <input
        autoFocus
        type="text"
        value={userName}
        placeholder="Enter your name"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        value={userMail}
        placeholder="Mail: example@mail.com"
        onChange={(e) => {
          setUserMail(e.target.value);
        }}
      />

      {editUser ? (
        <button
          onClick={() => {
            handleUpdate();
          }}
        >
          Update
        </button>
      ) : (
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Add
        </button>
      )}

      {userList.map((user, index) => {
        return (
          <div key={index} style={box}>
            <h1
              onClick={() => {
                editFields(user, index);
              }}
            >
              This is {user.userName}
            </h1>
            <p>
              You can reach <i>{user.userName}</i> through:{" "}
            </p>
            <span>
              <a href={mailLink} style={anchorStyle}>
                {user.userMail}
              </a>
            </span>
            <div
              style={btn}
              onClick={() => {
                handleDelete(index);
              }}
            >
              Del
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserInfo;

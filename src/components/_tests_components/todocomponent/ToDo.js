import { useState } from "react";
const initialState = [
  { author: "Jerell", song: "God Sent", id: 0 },
  { author: "Twenty One Pilots", song: "Ode To Sleep", id: 1 },
  { author: "Patapizi", song: "One Corner", id: 2 },
];
const ToDo = () => {
  const [playLists, setPlayList] = useState(initialState);

  const [author, setAuthor] = useState("");
  const [song, setSong] = useState("");
  const [edit, setEdit] = useState(false);

  const handleAddNewSong = () => {
    const play = {
      author,
      song,
    };
    //First Method:
    const newPlayList = playLists;
    newPlayList.push(play);
    setPlayList(newPlayList);

    //Second Method
    // setPlayList((prevState) => {
    //   return [...prevState, play];
    // });
    setAuthor("");
    setSong("");
  };
  const updateSong = () => {
    const play = {
      author,
      song,
    };
  };
  const editFields = (item) => {
    setAuthor(item.author);
    setSong(item.song);
    setEdit(true);
  };
  return (
    <div
      style={{
        padding: "30",
      }}
    >
      This is the Todo Page
      <div>
        <h4>My playlists</h4>
        <div>
          <input
            name="Author"
            value={author}
            type="text"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            name="Song"
            type="text"
            value={song}
            placeholder="Song"
            onChange={(e) => setSong(e.target.value)}
          />
          {edit ? (
            <button
              onClick={() => {
                handleAddNewSong();
              }}
            >
              Update
            </button>
          ) : (
            <button
              onClick={() => {
                updateSong();
              }}
            >
              Add to playlist
            </button>
          )}
        </div>
        <ul>
          {playLists.map((item, index) => {
            return (
              <li key={index} onClick={() => editFields(item)}>
                <span>{item.song}</span> By <span>{item.author}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;

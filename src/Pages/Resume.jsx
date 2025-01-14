import React from "react";
const Youtube = ({ id }) => {
  return (
    <iframe
      {...{
        width: "100%",
        height: "100%",
        src: `https://www.youtube.com/embed/${id}`,
        title: "YouTube video player",
        frameBorder: "0",
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
      }}
    ></iframe>
  );
};
//
const Resume = () => {
  const [text, setText] = React.useState("");
  const [response, setResponse] = React.useState("");
  
  return (
    <div>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2">Work Experience</div>

        <div className="w-full md:w-1/2">
          2035 - Present Editor I'm a paragraph. Click here to add your own text
          and edit me. It’s easy. Just click “Edit Text” or double click me to
          add your own content and make changes to the font.
        </div>
      </div>{" "}
      <div className="w-full flex flex-wrap mt-8">
        <div className="w-full md:w-1/2 "></div>

        <div className="w-full md:w-1/2 ">
          2035 - Present Editor I'm a paragraph. Click here to add your own text
          and edit me. It’s easy. Just click “Edit Text” or double click me to
          add your own content and make changes to the font.
        </div>
      </div>
      <div className="w-full flex flex-wrap mt-8">
        <div className="w-full md:w-1/2 "></div>

        <div className="w-full md:w-1/2 ">
          2035 - Present Editor I'm a paragraph. Click here to add your own text
          and edit me. It’s easy. Just click “Edit Text” or double click me to
          add your own content and make changes to the font.
        </div>
      </div>
      <div className="w-full flex flex-wrap mt-8">
        <div className="w-full md:w-1/2 ">Project</div>

        <div className="w-full md:w-1/2 ">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QB1RXhpZgAASUkqAAgAAAACAA4BAgAwAAAAJgAAAJiCAgAXAAAAVgAAAAAAAABkZWxpY2lvdXMgdGFjbywgbWV4aWNhbiBmb29kIGlzb2xhdGVkIG92ZXIgd2hpdGVBbnRvbmlvIE11QW96IFBhbG9tYXJlc//tAJhQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAfBwCUAAJQW50b25pb01QHAJ4ADBkZWxpY2lvdXMgdGFjbywgbWV4aWNhbiBmb29kIGlzb2xhdGVkIG92ZXIgd2hpdGUcAnQAF0FudG9uaW8gTXVBb3ogUGFsb21hcmVzHAJuABhHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG//4QVWaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iQW50b25pbyBNdUFveiBQYWxvbWFyZXMiIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcy9pU3RvY2twaG90byIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjE0NzcwNDc2MiIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2V1bGE/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiID4KPGRjOmNyZWF0b3I+PHJkZjpTZXE+PHJkZjpsaT5BbnRvbmlvTVA8L3JkZjpsaT48L3JkZjpTZXE+PC9kYzpjcmVhdG9yPjxkYzpkZXNjcmlwdGlvbj48cmRmOkFsdD48cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPmRlbGljaW91cyB0YWNvLCBtZXhpY2FuIGZvb2QgaXNvbGF0ZWQgb3ZlciB3aGl0ZTwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5nZXR0eWltYWdlcy5jb20vZGV0YWlsLzE0NzcwNDc2Mj91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybDwvcGx1czpMaWNlbnNvclVSTD48L3JkZjpsaT48L3JkZjpTZXE+PC9wbHVzOkxpY2Vuc29yPgoJCTwvcmRmOkRlc2NyaXB0aW9uPgoJPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0idyI/Pgr/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEI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"></img>
        </div>
      </div>
      <div className="w-full flex flex-wrap m-8">
        <div className="w-full md:w-1/2 ">
          {" "}
          <input
            {...{
              type: "text",
              placeholder: "Type here",
              onChange: (e) => setText(e.target.value),
            }}
          />
          <button className=" m-3" onClick={async()=>{
            const res = await fetch("https://api.openai.com/v1/chat/completions", {
              headers: {
                "Content-Type": "application/json",

              },
              method: "POST",
              body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                  {
                    role: "system",
                    content: "You are a helpful assistant.",
                  },
                  {
                    role: "user",
                    content: text,
                  },
                ],
              }
            ),
            });
            const data = await res.json();
            setResponse(data.choices[0].message.content);
          }}> Send Question</button>
        </div>
        <div className="w-full md:w-1/2 ">{response}</div>
      </div>
    </div>
  );
};

export default Resume;

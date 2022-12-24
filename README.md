# Project Title

My Portfolio Website Created At 24-12-2022

## Features

- Responsive Design
- UI-UX Design

## Usage/Examples

```javascript
//Send Email Function
const onSubmit = (e) => {
  e.preventDefault();
  setButtonText("Sending...");
  send("service_7psysuk", "template_ewdwr1d", toSend, "GX-BW5g0MG1OJXeV3")
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      setButtonText("Send");
      setToSend(formInitialDetails);
    })
    .catch((err) => {
      console.log("FAILED...", err);
    });
};
```

## Screenshots

![App Screenshot](https://www.linkpicture.com/q/GithubPortfolio.png)

## 🚀 About Me

👩‍💻 I'm currently working At Procoor For Construction Management Software...

🧠 I'm currently learning Design Patterns...

🤔 I'm looking for help with Software Design...

📫 Reach me (mahmoudashrf79@gmail.com)

![Logo](https://www.linkpicture.com/q/NABWY-Logo-White-with-Black-Background-5000x5000-1.png)

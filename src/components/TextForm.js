// Updated TextForm.js
import React, { useState } from "react";
import "./component.css";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Handlers for each feature
  const handleUpr = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to Uppercase!", "success");
  };

  const handleLwr = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to Lowercase!", "success");
  };

  const handleSentenceCase = () => {
    let newText = text
      .toLowerCase()
      .split(". ")
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ");
    setText(newText);
    props.showAlert("Text has been converted to Sentence Case!", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text has been cleared!", "success");
  };

  const handleRemoveSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces have been removed!", "success");
  };

  const handleRemoveSpecialChars = () => {
    let newText = text.replace(/[^a-zA-Z0-9 ]/g, "");
    setText(newText);
    props.showAlert("Special characters have been removed!", "success");
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied to clipboard!", "success");
  };

  const handlePasteFromClipboard = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setText(text + clipboardText);
    props.showAlert("Text has been pasted from clipboard!", "success");
  };

  const handleReverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text has been reversed!", "success");
  };

  const handleExtractNumbers = () => {
    let numbers = text.match(/\d+/g);
    setText(numbers ? numbers.join(" ") : "");
    props.showAlert("Numbers have been extracted!", "success");
  };

  const handleExtractLinks = () => {
    let links = text.match(/https?:\/\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+/g);
    setText(links ? links.join("\n") : "");
    props.showAlert("Links have been extracted!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Calculations for the summary
  const wordCount = text
    .split(/\s+/)
    .filter((element) => element.length !== 0).length;
  const characterCount = text.length;
  const statementCount =
    text.split(".").filter((sentence) => sentence.trim() !== "").length - 1;
  const questionCount =
    text.split("?").filter((question) => question.trim() !== "").length - 1;
  const exclamationCount =
    text.split("!").filter((exclamation) => exclamation.trim() !== "").length -
    1;
  const readTime = (wordCount / 50).toFixed(2); // Assuming average reading speed of 200 words per minute

  return (
    <div
      className={`body bg-${props.mode} text-${
        props.mode === "light" ? "dark" : "light"
      }`}
    >
      <div className={`mb-3 w-75 p-3 mx-5 bg-${props.mode}`}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.title}
        </label>
        <textarea
          className={`form-control bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          id="exampleFormControlTextarea1"
          rows="9"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <div className="button-container">
          <button className="btn btn-primary mt-2 mx-1" onClick={handleUpr}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mt-2 mx-1" onClick={handleLwr}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={handleSentenceCase}
          >
            Convert to Sentence Case
          </button>
          <button className="btn btn-primary mt-2 mx-1" onClick={handleClear}>
            Clear Text
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={handleRemoveSpaces}
          >
            Remove White Space
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={handleRemoveSpecialChars}
          >
            Remove Special Characters
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={handleCopyToClipboard}
          >
            Copy to Clipboard
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={handlePasteFromClipboard}
          >
            Paste from Clipboard
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={handleReverseText}
          >
            Reverse Text
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={handleExtractNumbers}
          >
            Extract Numbers
          </button>
          <button
            className="btn btn-primary mt-2 mx-1"
            onClick={handleExtractLinks}
          >
            Extract Links
          </button>
        </div>
      </div>
      <div className="w-75 p-3 mx-5 border">
        <h1>Text Summary</h1>
        <div className="container">
          <p>
            Words: {wordCount}, Characters: {characterCount}
          </p>
          <p>
            Statements: {statementCount}, Questions: {questionCount},
            Exclamations: {exclamationCount}
          </p>
          <p>Estimated Reading Time: {readTime} minutes</p>
        </div>
        <div className="container">
          <h1>Preview</h1>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </div>
  );
}

TextForm.defaultProps = {
  title: "Enter the text to analyze below:",
};

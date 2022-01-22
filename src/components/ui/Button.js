import React from "react";
import "./Button.css";

export function BtnPrimary({
  className = "",
  children,
  type = "button",
  onClick = () => {},
  onSubmit = () => {},
}) {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      className={className + " btn btn-primary"}
    >
      {children}
    </button>
  );
}
export function BtnSecondary({
  className = "",
  children,
  type = "button",
  onClick = () => {},
  onSubmit = () => {},
}) {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      className={className + " btn btn-secondary"}
    >
      {children}
    </button>
  );
}
export function BtnOutline({
  className = "",
  children,
  type = "button",
  onClick = () => {},
  onSubmit = () => {},
}) {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      className={className + " btn btn-primary-outline"}
    >
      {children}
    </button>
  );
}
export function BtnIcon({
  className = "",
  children,
  type = "button",
  onClick = () => {},
  onSubmit = () => {},
}) {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      className={className + " btn btn-icon"}
    >
      {children}
    </button>
  );
}

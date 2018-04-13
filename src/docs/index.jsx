import React from "react";
import { render } from "react-dom";
import ScrollTop from "../../lib";
import styled from "styled-components";
import "./styles.css";

const StyledScrollTop = styled(ScrollTop)`
  background-color: red;
`;
function Demo() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Top</h1>
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
      <h1>5</h1>
      <h1>6</h1>
      <h1>7</h1>
      <h1>8</h1>
      <h1>9</h1>
      <h1>10</h1>
      <h1>11</h1>
      <h1>12</h1>
      <h1>13</h1>
      <h1>14</h1>
      <h1>15</h1>
      <h1>16</h1>
      <h1>17</h1>
      <h1>18</h1>
      <h1>19</h1>
      <h1>20</h1>
      <h1>Bottom</h1>
      <StyledScrollTop />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));

class Palette {
  constructor(name, colors) {
    this.name = name;
    this.colors = colors;
    this.renderList();
  }
  renderList() {
    let colors = "";
    this.colors.forEach((col) => {
      colors += `<span class="color" style="background:${col}">${col}</span>`;
    });
    document.querySelector(
      "#paletteList"
    ).innerHTML += `<div class='palette' onclick="document.querySelector('#palModal').style.display='block'; "><h2>${this.name}</h2>${colors}</div>`;
  }
  renderEditor() {
    document.querySelector("#palModalName").innerHTML = this.name;
    document.querySelector("#color1").value = this.colors[0];
    document.querySelector("#color2").value = this.colors[1];
    document.querySelector("#color3").value = this.colors[2];
    document.querySelector("#color4").value = this.colors[3];
    document.querySelector("#color5").value = this.colors[4];
  }
}

export { Palette };

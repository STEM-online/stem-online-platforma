---
title: "Pitagorin poučak – objašnjenje i primjeri"
description: "Što je Pitagorin poučak, kako ga koristiti i zašto je važan za državnu maturu iz matematike."
subject: "matematika"
date: 2026-03-10
author: "STEM Online"
---

Pitagorin poučak jedan je od najpoznatijih teorema u matematici. 
Kaže da je u pravokutnom trokutu kvadrat hipotenuze jednak 
zbroju kvadrata kateta: a² + b² = c²

<div id="kalkulator">
  <h3>Interaktivni kalkulator</h3>

  <label>Kateta a: <span id="val-a">3</span>
    <input type="range" id="kateta-a" min="1" max="10" value="3" />
  </label>

  <label>Kateta b: <span id="val-b">4</span>
    <input type="range" id="kateta-b" min="1" max="10" value="4" />
  </label>

  <p id="rezultat"></p>

  <canvas id="trokut" width="300" height="300"></canvas>
</div>

<script>
  const sliderA = document.getElementById('kateta-a');
  const sliderB = document.getElementById('kateta-b');
  const valA = document.getElementById('val-a');
  const valB = document.getElementById('val-b');
  const rezultat = document.getElementById('rezultat');
  const canvas = document.getElementById('trokut');
  const ctx = canvas.getContext('2d');

  function crtaj() {
    const a = parseFloat(sliderA.value);
    const b = parseFloat(sliderB.value);
    const c = Math.sqrt(a * a + b * b);

    valA.textContent = a;
    valB.textContent = b;
    rezultat.textContent = `Hipotenuza c = ${c.toFixed(2)}`;

    const scale = 20;
    const ox = 30, oy = 270;

    ctx.clearRect(0, 0, 300, 300);

    // Trokut
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox + b * scale, oy);
    ctx.lineTo(ox + b * scale, oy - a * scale);
    ctx.closePath();
    ctx.fillStyle = '#d4edda';
    ctx.fill();
    ctx.strokeStyle = '#1a2e2a';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Oznake
    ctx.fillStyle = '#1a2e2a';
    ctx.font = '14px sans-serif';
    ctx.fillText(`a = ${a}`, ox + b * scale + 5, oy - (a * scale) / 2);
    ctx.fillText(`b = ${b}`, ox + (b * scale) / 2 - 10, oy + 20);
    ctx.fillText(`c = ${c.toFixed(2)}`, ox + (b * scale) / 2 - 40, oy - (a * scale) / 2 - 25);

    // Pravi kut
    ctx.beginPath();
    ctx.moveTo(ox + b * scale, oy - 10);
    ctx.lineTo(ox + b * scale - 10, oy - 10);
    ctx.lineTo(ox + b * scale - 10, oy);
    ctx.strokeStyle = '#e63946';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  sliderA.addEventListener('input', crtaj);
  sliderB.addEventListener('input', crtaj);
  crtaj();
</script>
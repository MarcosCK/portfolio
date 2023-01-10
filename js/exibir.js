const $artes_exibir = document.querySelector('[data-id="artes-exibir"]');

$artes_exibir.addEventListener("click", ({ target }) => {
  if (!$artes_exibir.classList.contains("mostrar")) return;
  if (target === $exibir_img) return;

  $artes_exibir.classList.remove("mostrar");
});

const $exibir_img = document.querySelector('[data-id="exibir-img"]');

const $exibirs = document.querySelectorAll("[data-exibir-url]");
$exibirs.forEach(($exibir) => {
  $exibir.addEventListener("click", () => {
    $artes_exibir.classList.add("mostrar");
    $exibir_img.setAttribute("src", $exibir.dataset.exibirUrl);
  });
});

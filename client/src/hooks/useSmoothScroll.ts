export function useSmoothScroll() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Учитываем высоту шапки
        behavior: "smooth"
      });
    }
  };

  return { scrollToSection };
}

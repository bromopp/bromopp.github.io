<script>
  import { onMount } from "svelte";

  let currentSlideIndex = 0;
  let slides = [];
  onMount(() => {
    fetch("/assets/slides.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch slides");
        }
      })
      .then((data) => {
        slides = data;
      })
      .catch((error) => {
        throw new Error("Error fetching slides:", error);
      });
  });

  let touchStartX = 0;
  let touchEndX = 0;

  function getClientX(event) {
    return event.touches ? event.touches[0].clientX : event.clientX;
  }

  function handleTouchStart(event) {
    touchStartX = getClientX(event);
  }

  function handleTouchMove(event) {
    touchEndX = getClientX(event);
  }

  const THRESHOLD = 100; // Adjust this value to control the swipe sensitivity

  let scroller;

  function handleTouchEnd() {
    const deltaX = touchEndX - touchStartX;
    const distance = (deltaX / window.innerWidth) * 100;
    if (deltaX > THRESHOLD) {
      scroller.scrollLeft += -distance;
      currentSlideIndex = Math.max(currentSlideIndex - 1, 0);
    } else if (deltaX < -THRESHOLD) {
      scroller.scrollLeft += distance;
      currentSlideIndex = Math.min(currentSlideIndex + 1, slides.length - 1);
    }
  }
</script>

<main class="container mx-auto px-auto p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div class="container">
      <h2 class="title">Hi! I'm <span class="name">Bruno </span>Oppizzi <br /> Web &
        Game <span class="role">Developer </span>
      </h2>
      <p class="description" />
    </div>
  </section>
  <section id="projects" class="">
    <!-- Slides -->

    <div
      class="scroller"
      tabindex="0"
      role="slider"
      aria-valuenow={currentSlideIndex}
      on:touchstart={handleTouchStart}
      on:touchmove={handleTouchMove}
      on:touchend={handleTouchEnd}
      on:mousedown={handleTouchStart}
      on:mousemove={handleTouchMove}
      on:mouseup={handleTouchEnd}
      bind:this={scroller}
    >
      {#each slides as slide}
        <div class="card">
          <img src={slide.thumbnail} alt="Slide Thumbnail" />
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  .scroller {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    width: 70%;
    white-space: nowrap;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-bottom: 0.5rem;
  }
  :global(.scroller .card) {
    flex: 1 0 auto;

  }
  .scroller::-webkit-scrollbar {
    display: none;
  }
  .card {
    width: 50px;
    height: 50px;
    object-fit: contain;
    user-select: none;
  }
</style>
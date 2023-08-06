<template>
  <div class="md:flex min-h-screen w-screen bg-stone-900 text-white font-serif">
    <!-- Info -->
    <div class="m-auto">
      <div class="lg:px-80 md:px-40 p-10">
        <p
          class="text-center md:text-4xl md:p-8 text-2xl p-5 border-solid border-white border-4"
        >
          José Sánchez
        </p>

        <div class="py-6 md:text-xl text-lg text-justify">
          <p class="md: my-5">
            I'm a highly motivated Computer Engineer passionate about leveraging
            technology to solve complex problems. With expertise in Software
            Development and Cloud Computing, I'm always looking for new
            challenges to push my boundaries and expand my skill set. I
            currently work at <strong>Google</strong> as a Technical Solutions
            Engineer in the AI/ML stack.
            <br v-for="_ in 2" />
            I strongly believe in the power of collaboration and learning from
            others, and I'm eager to connect with like-minded professionals who
            share my vision. With a commitment to lifelong learning, I
            continuously seek out new opportunities to improve my skills and
            knowledge
          </p>
        </div>

        <p class="text-xl text-center py-3">
          Drop me an email at
          <br />
          <a href="mailto:hola@josesa.dev">hola@josesa.dev</a>
        </p>

        <div class="text-center">
          <a target="_blank" href="https://github.com/SanchezPepe">
            <font-awesome-icon
              class="p-3"
              icon="fa-brands fa-github"
              size="2x"
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/sanchezjose8">
            <font-awesome-icon
              class="p-3"
              icon="fa-brands fa-linkedin"
              size="2x"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

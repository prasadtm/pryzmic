import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="page-shell">
    <header class="site-header">
      <span class="company-name">Pryzmic</span>
      <nav class="site-menu">
        <a href="#products">Products</a>
      </nav>
    </header>
    <section class="hero-card">
      <p class="eyebrow">AI-powered solutions</p>
       <!--h1>Vision</h1-->
      <p class="lead">
        Empowering businesses with AI-first solutions that simplify complexity, accelerate growth, and solve meaningful customer problems.
      </p>
      <div class="actions">
        <a class="primary" href="#features">Explore features</a>
        <a class="secondary" href="#deploy">Deployment</a>
      </div>
    </section>

    <section class="features" id="features">
      <article>
        <h2>Fast</h2>
        <p>Static assets only, so the page loads quickly and stays simple to maintain.</p>
      </article>
      <article>
        <h2>Deployable</h2>
        <p>Use any static hosting provider with the standard Vite build output in <strong>dist</strong>.</p>
      </article>
      <article>
        <h2>Editable</h2>
        <p>The structure is intentionally small, making it easy to extend later.</p>
      </article>
      <article id="products">
        <h2>Products</h2>
        <p>This is the products menu section. Add your products details or links here.</p>
      </article>
      <article id="deploy">
        <h2>Deploy</h2>
        <p>Build with <strong>npm run build</strong> and deploy the generated <strong>dist</strong> directory.</p>
      </article>
    </section>
  </main>
`;

<script lang="ts">
  import { fly } from 'svelte/transition';
  import {open, openChat, openFaq, openAgent} from "./store";

  const handleOpen=() => {
    open.update(val=>!val);
    openChat.set(false);
    openFaq.set(false);
    openAgent.set(false);
  };

  const handleOpenChat=()=>{
    if($open) open.update(val=>!val)
    openChat.update(val=>!val);
  }
  const handleOpenAgent=()=>{
    if($open) open.update(val=>!val)
    openAgent.update(val=>!val);
  }
  const handleOpenFaq=()=>{
    if($open) open.update(val=>!val); 
    openFaq.update(val=>!val);

  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Questrial&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  @import "./widget.css";
</style>

<svelte:options customElement="chat-widget" />

<div> 
  <div class="chat-icon" aria-live="polite" aria-label="Chat" role="button" tabindex="0" onclick={handleOpen} onkeydown={(e) => e.key === "Enter" && handleOpen}>
  </div>

  {#if $open}
      <div class="welcome-box" transition:fly="{{ y: 20, duration: 300 }}">
        <div class="welcome">
      <h1>Welcome to our website!</h1>
      <p>Nice to meet you! If you have any question about our services, feel free to contact us.</p>
    </div>
    <div class="welcome-2">
      <div class="faq" onclick={handleOpenFaq} onkeydown={e=>e.key==="Enter" && handleOpenFaq} aria-details="faq option" role="button" tabindex="0">FAQ</div>
      <div class="talk" onclick={handleOpenChat} onkeydown={e=>e.key==="Enter" && handleOpenChat} aria-details="chat option" role="button" tabindex="0">Let's Talk</div>
    </div>
      </div>
  {/if}

  {#if $openFaq && ($open==false)}
      {open.set(false)}
      <div class="faq-box">
        <div class="faq-options">
            <ul class="faq-options-li">
                <li>How do I apply?</li>
                <li>What courses do you offer?</li>
                <li> When do applications close?</li> 
                <li>Where is the campus located?</li>
                <li>Talk to someone?</li>
                <div id="talk-btn" onclick={handleOpenAgent} onkeydown={e=>e.key==="Enter" && handleOpenAgent} aria-details="chat option" role="button" tabindex="0">Can I talk to someone?</div>
            </ul>
        </div>
      </div>
  {/if}
  
  {#if ($openChat && !($open))}
      <div class="chat-dialog" transition:fly="{{ x: 20, duration: 300 }}">
      <div class="chat-header">
        <div>
          <h1>ChatFlow</h1>
          <p>A live chat interface that allows for seamless, natural communication and connection.</p>
        </div>
        <div class="cross" role="button" tabindex="0" onclick={() => openChat.update(val=>!val)} onkeydown={(e) => e.key === "enter" && openChat.update(val=>!val)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
        </div>
      </div>
      <div class="chat-body">
        <p class="bot-msg">Hi! How Can I help You?</p>
        <div class="chat-options">
            <ul id="chat-options">
                <li>How do I apply?</li>
                <li>What courses do you offer?</li>
                <li> When do applications close?</li> 
                <li>Where is the campus located?</li>
                <li>Talk to someone?</li>
            </ul>
        </div>
        
         <div class="input">
          <input type="text" placeholder="Let's share something" />
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button class="send"><img src="/src/assets/Shape.svg" alt=""></button>
         </div>
      </div>
    </div>
  {/if}

  {#if ($openAgent && !($open))}
    <div class="chat-dialog" transition:fly="{{ x: 20, duration: 300 }}">
      <div class="chat-header">
        <div>
          <h1>ChatFlow</h1>
          <p>A live chat interface that allows for seamless, natural communication and connection.</p>
        </div>
        <!-- <div class="cross" role="button" tabindex="0" onclick={() => openChat.update(val=>!val)} onkeydown={(e) => e.key === "enter" && openChat.update(val=>!val)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
        </div> -->
      </div>
      <div class="chat-body">
        <p class="bot-msg">Thanks for joining us! Let's start by getting your name.</p>
        <ul class="user-msg">
          <li>John</li>
        </ul>
        
         <div class="input">
          <input type="text" placeholder="Let's share something" />
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button class="send"><img src="/src/assets/Shape.svg" alt=""></button>
         </div>
      </div>
    </div>
  {/if}

</div>

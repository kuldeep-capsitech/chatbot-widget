<script lang="ts">
  import { fly } from 'svelte/transition';
  import {open, openChat, openFaq} from "./store";
  import { SendHorizonalIcon} from '@lucide/svelte';

  const handleOpen=() => {
    open.update(val=>!val);
    openChat.set(false);
    openFaq.set(false);
  };

  const handleOpenChat=()=>{
    if($open) open.update(val=>!val)
    openChat.update(val=>!val);
  }
  const handleOpenFaq=()=>{
    if($open) open.update(val=>!val); 
    openFaq.update(val=>!val);

  }
</script>

<style>
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
      <div>FAQs</div>
  {/if}
  
  {#if ($openChat && !($open))}
        <div class="chat-dialog" transition:fly="{{ x: 20, duration: 300 }}">
      <div class="chat-header">
        <p>ChatFlow</p>
        
        <div role="button" tabindex="0" onclick={() => openChat.update(val=>!val)} onkeydown={(e) => e.key === "enter" && openChat.update(val=>!val)}>X</div>
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
          <button class="send"><SendHorizonalIcon /></button>
         </div>
      </div>
    </div>
  {/if}
</div>

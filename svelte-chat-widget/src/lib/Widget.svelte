<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import {open, openChat, openFaq} from "./store";

  const handleOpenChat=()=>{
    open.update(val=>!val)
    openChat.update(val=>!val);
  }
  // let open = $state(false);
</script>

<style>
  @import "./widget.css";
</style>

<svelte:options customElement="chat-widget" />

<div> 
  <div class="chat-icon" aria-live="polite" aria-label="Chat" role="button" tabindex="0" onclick={() => open.update(val=>!val)} onkeydown={(e) => e.key === "Enter" && open.update(val=>!val)}>
  </div>

  {#if $open}
      <div class="welcome-box" transition:fly="{{ y: 20, duration: 300 }}">
        <div class="welcome">
      <h1>Welcome to our website!</h1>
      <p>Nice to meet you! If you have any question about our services, feel free to contact us.</p>
    </div>
    <div class="welcome-2">
      <div class="faq">FAQ</div>
      <div class="talk" onclick={handleOpenChat} onkeydown={e=>e.key==="Enter" && handleOpenChat} aria-details="chat option" role="button" tabindex="0">Let's Talk</div>
    </div>
      </div>
  {/if}

  {#if $openFaq}
      <div>hello</div>
  {/if}
  
  {#if ($openChat && !($open))}
        <div class="chat-dialog" transition:fly="{{ x: 20, duration: 300 }}">
      <div class="chat-header">
        <p>Chat Widget</p>
        <div role="button" tabindex="0" onclick={() => openChat.update(val=>!val)} onkeydown={(e) => e.key === "Enter" && openChat.update(val=>!val)}>X</div>
      </div>
      <div class="chat-body">
        Hello! How can I assist you today?
        <div class="chat-options">
            <ul id="chat-options">
                <li>select</li>
                <li>About us</li>
                <li>Conatct support</li>
            </ul>
        </div>
        <input type="text" placeholder="Enter your message here" />
      </div>
    </div>
  {/if}
</div>

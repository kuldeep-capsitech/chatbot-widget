<script lang="ts">
  import chatIconUrl from '../assets/chat2.png';
  let open = $state(false);
</script>

<style>
  :host {
    all: initial; /* Reset styles */
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    font-family: sans-serif;
    z-index: 9999;
  }

  .chat-icon {
    /* position: absolute; */
    bottom: 3%;
    right: 2%;
    /* background-image: url("./assets/chat2.png"); */
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .chat-icon:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .chat-dialog {
    position: absolute;
    bottom: 110%;
    right: 50%;
    width: 400px;
    height: 500px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .chat-icon img{
    width: inherit;
  }

  .chat-header {
    background: #4f46e5;
    color: white;
    padding: 0.8rem;
    display: flex;
    justify-content: space-between;
    font-weight: 800;
    font-size: 1.5rem;
  }

  .chat-header div{
    cursor: pointer;
    font-weight: bolder;
    padding: 0.5rem;
    display: flex;
    place-items: center;
    font-size: medium;
  }

  .chat-body {
    flex: 1;
    position: relative;
    height: inherit;
    padding: 0.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    overflow-y: auto;
  }

  .chat-options{
    padding: 0.5rem;
  }

  #chat-options{
    padding: 0.5rem;
    outline: none;
    border-radius: 10px;
    position: absolute;
    bottom: 10%;
    right: 0%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-end;
  }

  #chat-options li{
    padding: 0.3rem;
    border: 2px solid rgba(178, 227, 250, 0.933);
    border-radius: 10px;
    list-style: none;
    padding: 0.3rem;
  }
  #chat-options li:hover{
    /* background: #f0f0f0; */
    background: #9ab9ca;
    cursor: pointer;
  }

  .chat-body input{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    /* border: 1px solid #ccc; */
    border: none;
    width: 100%;
    box-sizing: border-box;
    border-top: 0.5px solid #ccc;
    background-color: #f0f0f0f5;
  }

  .chat-body input:focus{
    outline: none;
    /* border: 2px solid #46b3e5; */
  }

</style>

<svelte:options customElement="chat-widget" />

<div> 
  <div class="chat-icon"  aria-live="polite" aria-label="Chat" role="button" tabindex="0" onclick={() => (open = !open)} onkeydown={(e) => e.key === "Enter" && (open = !open)}>
    <img src={chatIconUrl} alt="Chat Icon">
  </div>

  {#if open}
    <div class="chat-dialog">
      <div class="chat-header">
        <p>Chat Widget</p>
        <div role="button" tabindex="0" onclick={() => (open = !open)} onkeydown={(e) => e.key === "Enter" && (open = !open)}>X</div>
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

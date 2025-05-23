// import { useField } from 'vee-validate';
// import { required } from '@vee-validate/rules';
// import { ref } from 'vue';

// export function useSignupForm() {

//   const resetForm = (event) => {
//     event.target.elements.email.value = '';
//     updates.value = false;
//     alliance.value = false;
//     conversation.value = false;
//   };

//   const { value: email, errorMessage: emailError } = useField('email', required);
//   const { value: updates, errorMessage: updatesError } = useField('videos-updates', required);
//   const { value: alliance, errorMessage: allianceError } = useField('join-alliance');
//   const { value: conversation, errorMessage: conversationError } = useField('join-conversation');

//   const success = ref(false);
//   updates.value = true;
//   alliance.value = false;
//   conversation.value = false;

//   async function onSubmit(event) {
//     event.preventDefault(); // Prevent default form submission

//     try {
//       // Handle form submission here
//       const payload = {
//         email: event.target.elements.email.value,
//         updates: updates.value ? 'Yes' : 'No',
//         alliance: alliance.value ? 'Yes' : 'No',
//         conversation: conversation.value ? 'Yes' : 'No',
//       };

//       const body = JSON.stringify(payload);

//       const response = await fetch('https://formspree.io/f/mgvwpeoj', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: body,
//       });

//       if (response.ok) {
//         resetForm(event);
//         console.log('Form submitted successfully');
//         success.value = true;
//       } else {
//         console.error('Form submission failed');
//       }
//     } catch (e) {
//       console.error('Form submission error:', e);
//     }
//   }

//   return {
//     email,
//     updates,
//     alliance,
//     conversation,
//     success,
//     onSubmit,
//   };
// }
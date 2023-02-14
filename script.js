const meetingBooker = document.querySelector('.meetingBooker');
const meetingForm = document.querySelector('.meetingForm');
const meetingSubmit = document.querySelector('.meetingSubmit');

meetingBooker.addEventListener('click', () => {
  meetingForm.classList.add('displayMeetingForm');
});

meetingSubmit.addEventListener('click', () => {
  meetingForm.classList.remove('displayMeetingForm');
});

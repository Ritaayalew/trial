interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  services: string;
  gender: string;
}

async function fetchProfile() {
  try {
      const token = localStorage.getItem('authToken'); // Make sure the key matches what you used earlier
      console.log(token);
      if (!token) {
          throw new Error('No token found');
      }

      const response = await fetch('/api/volunteer/my-profile', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
          },
      });

      if (!response.ok) {
          throw new Error('Failed to fetch profile data');
      }

      const data: ProfileData = await response.json();
      console.log(data);
      console.log("bla");
      updateProfile(data);
  } catch (error) {
      console.error('Error fetching profile data:', error);
  }
}

function updateProfile(data: ProfileData) {
  const nameElement = document.querySelectorAll('.custom-name');
  const emailElements = document.querySelectorAll('.email');
  const phoneElement = document.querySelector('.samp-phone');
  const servicesElement = document.querySelector('.samp-services');

  if (nameElement.length) { 
    nameElement.forEach(element => { element.textContent = data.fullName ; }); 
  }
  if (emailElements.length){
    emailElements.forEach(e => e.textContent = data.email);
  }
  if (phoneElement) phoneElement.textContent = data.phone;
  if (servicesElement) servicesElement.textContent = data.services;
  
}

document.addEventListener('DOMContentLoaded', fetchProfile);

  
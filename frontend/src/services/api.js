const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Contact API methods
  async submitContact(formData) {
    return this.request('/contact/submit', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  async getContactSubmissions() {
    return this.request('/contact/submissions');
  }

  // Portfolio API methods
  async getPortfolioData(type) {
    return this.request(`/portfolio/${type}`);
  }

  async addPortfolioData(type, data) {
    return this.request(`/portfolio/${type}`, {
      method: 'POST',
      body: JSON.stringify({ data }),
    });
  }

  async updatePortfolioData(id, data) {
    return this.request(`/portfolio/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ data }),
    });
  }

  async deletePortfolioData(id) {
    return this.request(`/portfolio/${id}`, {
      method: 'DELETE',
    });
  }
}

export default new ApiService();
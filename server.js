import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  return createServer({
    environment,

    models: {
      apartment: Model,
    },

    seeds(server) {
      const amenities = [
        "Double bed",
        "Balcony",
        "Bathroom",
        "Shower",
        "Shampoo and soap",
        "Hairdryer",
        "Slippers",
        "Wardrobe",
        "Working table",
        "Mini bar",
        "Satellite TV",
        "Telephone",
        "Wireless connect",
        "Air conditioner",
        "220 AC"
      ];

      const locations = ["Accra", "Tema", "Koforidua", "Capecoast"];
      const types = ["classic", "deluxe", "executive"];

      const generateLocation = () => {
        const streetNames = ["Phoenix Road", "Sunset Boulevard", "Maple Street", "Ocean Drive"];
        const city = locations[Math.floor(Math.random() * locations.length)];
        const street = streetNames[Math.floor(Math.random() * streetNames.length)];
        return `${street}, ${city}`;
      };

      const createApartment = (id, type, price, prefix, roomNum) => {
        server.create("apartment", {
          id,
          name: `${type.charAt(0).toUpperCase() + type.slice(1)} Room ${roomNum}`,
          type,
          price: `$${price}/night`,
          mainImageUrl: `./src/assets/apartment-imgs/classic1-main.jpg`,
          // mainImageUrl: `./src/assets/apartment-imgs/${prefix}-main.jpg`,
          carouselImages: [
            // `src/assets/apartment-imgs/${prefix}-carousel-1.jpg`,
            // `src/assets/apartment-imgs/${prefix}-carousel-2.jpg`,
            // `src/assets/apartment-imgs/${prefix}-carousel-3.jpg`,
            // `src/assets/apartment-imgs/${prefix}-carousel-4.jpg`
          ],
          location: generateLocation(),
          amenities,
        });
      };

      // Create 12 apartments in total
      let id = 1;

      const apartmentTypes = [
        { type: "classic", price: 100, count: 4 },
        { type: "deluxe", price: 200, count: 4 },
        { type: "executive", price: 300, count: 4 },
      ];

      apartmentTypes.forEach(({ type, price, count }) => {
        for (let i = 1; i <= count; i++) {
          createApartment(id++, type, price, `${type}${i}`, i);
        }
      });

      // // Classic (4 apartments)
      // for (let i = 1; i <= 4; i++) {
      //   console.log("classic", i)
      //   createApartment(id++, "classic", 100, `classic${i}`, i);
      // }
      
      // // Deluxe (4 apartments)
      // for (let i = 1; i <= 4; i++) {
      //   console.log("deluxe", i)
      //   createApartment(id++, "deluxe", 200, `deluxe${i}`, i);
      // }
      
      // // Executive (4 apartments)
      // for (let i = 1; i <= 4; i++) {
      //   console.log("executive", i)
      //   createApartment(id++, "executive", 300, `executive${i}`, i);
      // }
    },

    routes() {
      this.namespace = "/api";

      /**
       * GET /api/apartments
       * 
       * Query Parameters:
       * - page (optional): Page number (default: 1)
       * - limit (optional): Number of apartments per page (default: all)
       * 
       * Responses:
       * - If page and limit are provided: returns paginated apartments.
       * - If not provided: returns all apartments.
       */
      this.get("/apartments", (schema, request) => {
        // const page = parseInt(request.queryParams.page, 10);
        // const limit = parseInt(request.queryParams.limit, 10);
        const { page, limit, type } = request.queryParams;

        // const allApartments = schema.apartments.all().models;

        let apartments = schema.apartments.all().models;

        // Filter by type if provided
        if (type) {
          apartments = apartments.filter((apt) => apt.type === type.toLowerCase());
        }

        const total = apartments.length;

        // if (page && limit) {
        //   const start = (page - 1) * limit;
        //   const end = start + limit;
        //   const paginatedApartments = allApartments.slice(start, end);

        //   return {
        //     apartments: paginatedApartments,
        //     total: allApartments.length,
        //     page,
        //     limit,
        //   };
        // }

        // Paginate if page and limit are provided
        if (page && limit) {
          const pageNumber = parseInt(page, 10) || 1;
          const limitNumber = parseInt(limit, 10) || 6;
          const start = (pageNumber - 1) * limitNumber;
          const end = start + limitNumber;

          apartments = apartments.slice(start, end);
        }

        return { apartments, total };

        // return {
        //   apartments: allApartments,
        //   total: allApartments.length,
        // };
      });
    },
  });
}
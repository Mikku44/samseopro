import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("components/Layout.tsx", [
        index("routes/index.tsx"),
        route("contact-us", "routes/contact-us.tsx"),
        route("blog", "routes/blog.tsx"),
        route("blog/:slug", "routes/blogDetail.tsx"),
        route("admin/registrations", "routes/admin.registrations.tsx"),
        route("services/ads-training-service", "routes/services.ads-training-service.tsx"),
        route("services/seo-training-service", "routes/services.seo-training-service.tsx"),
        route("services/web-maker", "routes/services.web-maker.tsx"),
        route("google-ads-service", "routes/google-ads-service.tsx"),
    ]),

] satisfies RouteConfig;

import { 
    Bolt,
    ShoppingBag, 
    BellDot, 
    BookOpenText, 
    BriefcaseBusiness, 
    CircleHelp, 
    TriangleAlert,
    Users,
    Lock,
    Dessert,
    ShieldPlus,
    MessageCircle,
    Images,
    Figma,
    Play,
    MapPin,
    Database,
    PanelsTopLeft, 
    PanelTop,

} from "lucide-react";

    const menu = [
        {
            name: 'Features',
            subMenuHeading: ['Design', 'scale'],
            subMenu: [
                {
                    name: 'Design',
                    desc: 'Responsive design',
                    icon: PanelsTopLeft,
                },
                {
                    name: 'management',
                    desc: 'Site control',
                    icon: Bolt,
                },
                {
                    name: 'Navigation',
                    desc: 'Link pages',
                    icon: PanelTop,
                },
                {
                    name: "cms",
                    desc: "Management content",
                    icon: Database,
                },
            ],
            gridCols: 2,
        },
        {
            name: 'Resources',
            subMenuHeading: ['Get started', 'Programs', 'Recent'],
            subMenu: [
                {
                    name: 'Market Place',
                    desc: 'Browse templates',
                    icon: ShoppingBag,
                },
                {
                    name: 'Academy',
                    desc: 'Watch lessons',
                    icon: Play,
                },
                {
                    name: 'Experts',
                    desc: 'Jobs',
                    icon: BriefcaseBusiness,
                },
                {
                    name: "Meetups",
                    desc: "Upcoming events",
                    icon: MapPin,
                },
                {
                    name: 'Blog',
                    desc: 'Posts',
                    icon: BookOpenText,
                },
                {
                    name: 'Gallery',
                    desc: 'Images',
                    icon: Images,
                },
                {
                    name: 'Updates',
                    desc: 'Changelog',
                    icon: BellDot,
                },
                {
                    name: "Figma",
                    desc: "Plugin",
                    icon: Figma,
                },
            ],
            gridCols: 3,
        },
        {
            name: "Support",
            subMenu: [
                {
                    name: 'Help',
                    desc: 'Center',
                    icon: CircleHelp,
                },
                {
                    name: 'Community',
                    desc: 'Project Help',
                    icon: MessageCircle,
                },
                {
                    name: 'Emmergency',
                    desc: 'Urgent issues',
                    icon: TriangleAlert,
                },
            ],
            gridCols: 1,
        },
        {
            name: 'Enterprise',
            subMenuHeading: ['Overview', 'Features'],
            subMenu: [
                {
                    name: 'Enterprise',
                    desc: 'Overview',
                    icon: ShieldPlus,
                },
                {
                    name: 'Collaboration',
                    desc: 'Design together',
                    icon: Dessert,
                },
                {
                    name: 'customers',
                    desc: 'Stories',
                    icon: Users,
                },
                {
                    name: 'Security',
                    desc: 'Your site secured',
                    icon: Lock,
                },
            ],
            gridCols: 2,
        },
        {
            name: 'Pricing',
        },
        {
            name: 'Contact',
        },
    ];

export default menu;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Trash2, LogOut } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import parchmentBg from "@/assets/parchment-bg.jpeg";

interface Restoration {
  original: string;
  restored: string;
  date: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const [restorations, setRestorations] = useState<Restoration[]>([]);
  const [profile, setProfile] = useState({
    name: "Person X",
    email: "person@example.com",
  });

  useEffect(() => {
    const stored = localStorage.getItem('restorations');
    if (stored) {
      setRestorations(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    navigate("/auth");
  };

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      localStorage.clear();
      toast.success("Account deleted successfully!");
      navigate("/auth");
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `url(${parchmentBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="min-h-screen bg-background/80 backdrop-blur-[2px]">
        <Header />

        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-heritage-tan">
              My Profile
            </h1>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Profile Info Card */}
              <div className="bg-heritage-cream rounded-3xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Account Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 text-foreground font-medium mb-2">
                      <User className="w-4 h-4" />
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="bg-background border-heritage-tan/30"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-medium mb-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="bg-background border-heritage-tan/30"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="flex items-center gap-2 text-foreground font-medium mb-2">
                      <Lock className="w-4 h-4" />
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-background border-heritage-tan/30"
                    />
                  </div>

                  <Button
                    onClick={() => toast.success("Profile updated successfully!")}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>

              {/* Actions Card */}
              <div className="bg-heritage-cream rounded-3xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Account Actions</h2>
                
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-2xl p-6">
                    <h3 className="font-semibold mb-2 text-foreground">Restorations</h3>
                    <p className="text-3xl font-bold text-primary">{restorations.length}</p>
                    <p className="text-sm text-muted-foreground">Total documents restored</p>
                  </div>

                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full border-heritage-tan rounded-full py-6"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Log Out
                  </Button>

                  <Button
                    onClick={handleDeleteAccount}
                    variant="destructive"
                    className="w-full rounded-full py-6"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>

            {/* Recent Restorations */}
            <div className="bg-heritage-cream rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Recent Restorations</h2>
              
              {restorations.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No restorations yet. Visit the Studio to get started!
                </p>
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {restorations.slice(0, 6).map((restoration, index) => (
                    <div key={index} className="rounded-xl overflow-hidden border-2 border-heritage-tan/30">
                      <img 
                        src={restoration.restored} 
                        alt="Restored document" 
                        className="w-full aspect-[3/4] object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

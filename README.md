# Installation

*Assumes [CS50 Appliance 17](https://manual.cs50.net/CS50_Appliance_17).*

Inside appliance as `root`:

    sudo su -
    yum install php-pecl-yaml
    gem install sass
    exit

Inside appliance as `jharvard`:

    cd ~/vhosts
    git clone git@github.com:cs50/video50v2.git video50v2.cs50.net
    cd cs50.tv
    ./bin/chmod

Outside appliance (assuming Mac):

    sudo su -
    echo "w.x.y.z video50v2.cs50.net" >> /etc/hosts # where w.x.y.z is appliance's IP address
    exit

# Troubleshooting

## Fixing Permissions

    chmod 700 ~/vhosts/video50v2.cs50.net/bin/chmod
    ~/vhosts/video50v2.cs50.net/bin/chmod

# Deployment

*requires that your SSH key be added to `build.x.cs50.net`*

    git remote add production ssh://ec2-user@build.x.cs50.net/home/ec2-user/var/video50.git # once
    git push production master # thereafter
